import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  list: Observable<any[]>;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private create: CreateService,
  ) {
    this.form = fb.group({
      'username': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ],
      'number': [ '', [ Validators.required ] ],
    });
  }

  ngOnInit() {
    this.list = this.create.refValueChanges;
  }

  firestore() {
    if (this.form.invalid) return;

    const form = this.form.value;

    this.create.addDocument = form;

  }

}
