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

  form: FormGroup;

  list: Observable<any[]>;

  pushID: string = '';
  counter: number = 0;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private update: UpdateService,
  ) {
    this.form = fb.group({
      'username': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ],
      'number': [ '', [ Validators.required ] ],
    });
  }

  ngOnInit() {
    this.list = this.update.refSnapshotChanges;

    this.list.subscribe((response: any) => {

      if (this.counter !== 0) return;
      this.counter++;

      try {
        this.pushID = response[0].pushID;

        this.form.patchValue({
          'username': response[0].username,
          'password': response[0].password,
          'number': response[0].number
        });
      } catch(e) {

      }

    });

  }

  onCardSelect(pushID: string, item: any) {
    this.pushID = pushID;

    this.form.patchValue({
      'username': item.username,
      'password': item.password,
      'number': item.number,
    });
  }

  updateDocument() {
    if (this.form.invalid) return;

    const form = this.form.value;

    this.update.updateDocument(this.pushID, form);

  }

}
