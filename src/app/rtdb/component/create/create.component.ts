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

  objectForm: FormGroup;
  listForm: FormGroup;

  object: Observable<any>;
  list: Observable<any[]>;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private create: CreateService,
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
    this.object = this.create.objectValueChanges;
    this.list = this.create.listValueChanges;
  }

  postObject(option: boolean) {
    if (this.objectForm.invalid) return;

    const objectForm = this.objectForm.value;

    option
      ? this.create.createObjectWithSet = objectForm
      : this.create.createObjectWithUpdate = objectForm;

  }

  postList() {
    if (this.listForm.invalid) return;

    const listForm = this.listForm.value;

    this.create.createListWithPush = listForm;

  }

}
