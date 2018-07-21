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

  form: FormGroup;

  list: Observable<any[]>;

  pushID: string = '';

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private _delete: DeleteService,
  ) {
    this.form = fb.group({
      'username': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ],
      'number': [ '', [ Validators.required ] ],
    });

    this.form.disable();
  }

  ngOnInit() {
    this._delete.setInit();
    this.list = this._delete.refSnapshotChanges;
  }

  onCardSelect(pushID: string, item: any) {
    this.pushID = pushID;

    this.form.patchValue({
      'username': item.username,
      'password': item.password,
      'number': item.number,
    });
  }

  deleteList(option: boolean) {
    if (this.form.invalid) return;

    option
      ? this._delete.removeDocument = this.pushID
      : this._delete.removeEntireCollection();

    this.form.reset();
  }

}
