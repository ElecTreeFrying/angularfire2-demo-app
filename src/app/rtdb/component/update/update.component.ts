import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  objectForm: FormGroup;
  listForm: FormGroup;

  object: Observable<any>;
  list: Observable<any[]>;

  pushID: string = '';
  counter: number = 0;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private update: UpdateService,
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
  }

  ngOnInit() {
    this.object = this.update.objectSnapshotChanges;
    this.list = this.update.listSnapshotChanges;

    this.object.subscribe((response) => {

      this.objectForm.patchValue({
        'username': response.username,
        'password': response.password,
        'number': response.number,
      });

    });

    this.list.subscribe((response: any) => {

      if (this.counter !== 0) return;
      this.counter++;

      this.pushID = response[0].pushID;

      this.listForm.patchValue({
        'username': response[0].username,
        'password': response[0].password,
        'number': response[0].number
      });

    });

  }

  onCardSelect(pushID: string, item: any) {
    this.pushID = pushID;

    this.listForm.patchValue({
      'username': item.username,
      'password': item.password,
      'number': item.number,
    });
  }

  updateObject(option: boolean) {
    if (this.objectForm.invalid) return;

    const objectForm = this.objectForm.value;

    option
      ? this.update.updateObjectWithSet = objectForm
      : this.update.updateObjectWithUpdate = objectForm;

  }

  updateList(option: boolean) {
    if (this.listForm.invalid) return;

    const listForm = this.listForm.value;

    option
      ? this.update.updateListWithSet(this.pushID, listForm)
      : this.update.updateListWithUpdate(this.pushID, listForm);

  }

}
