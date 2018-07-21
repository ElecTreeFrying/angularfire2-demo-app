import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { DeleteService } from './delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  objectForm: FormGroup;
  listForm: FormGroup;

  object: Observable<any>;
  list: Observable<any[]>;

  pushID: string = '';
  counter: number = 0;
  option: boolean = false;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private _delete: DeleteService,
  ) {
    this.objectForm = fb.group({
      'username': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ],
      'number': [ '', [ Validators.required ] ],
    });

    this.listForm = fb.group({
      'username': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ],
      'number': [ '', [ Validators.required ] ],
    });

    this.objectForm.disable();
    this.listForm.disable();
  }

  ngOnInit() {
    this._delete.setInit();

    this.object = this._delete.objectSnapshotChanges;
    this.list = this._delete.listSnapshotChanges;

    this.object.subscribe((response) => {

      this.objectForm.patchValue({
        'username': response.username,
        'password': response.password,
        'number': response.number,
      });

    });

    setTimeout(() => {
      this.list.subscribe((response: any) => {

        if (this.counter !== 0) return;
        this.counter++;

        try {
          this.pushID = response[0].pushID;
          this.listForm.patchValue({
            'username': response[0].username,
            'password': response[0].password,
            'number': response[0].number
          });
        } catch(e) {

        }


      });
    }, 2000);

  }

  onCardSelect(pushID: string, item: any) {
    this.pushID = pushID;

    this.listForm.patchValue({
      'username': item.username,
      'password': item.password,
      'number': item.number,
    });
  }

  setInit() {
    this.list.subscribe((response: any) => {

      if (!this.option) return;
      this.option = false;

      try {
        this.pushID = response[0].pushID;
        this.listForm.patchValue({
          'username': response[0].username,
          'password': response[0].password,
          'number': response[0].number
        });
      } catch(e) {

      }


    });
  }

  deleteObject() {
    if (this.objectForm.invalid) return;

    this._delete.removeObjectWithRemove();

    this.option = true;
    this.setInit();
  }

  deleteList(option: boolean) {
    if (this.listForm.invalid) return;

    option
      ? this._delete.removeListWithRemove = this.pushID
      : this._delete.removeEntireList();

    this.option = true;
    this.setInit();
  }

}
