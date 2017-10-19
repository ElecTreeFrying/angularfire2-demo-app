import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { CreateService } from './create.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  firebaseCreateForm: FormGroup;
  list: boolean = true;

  constructor(private createService: CreateService) { }

  ngOnInit() {
    this.firebaseCreateForm = new FormGroup({
      'name': new FormControl(null),
      'age': new FormControl(null),
      'gender': new FormControl(null),
      'isActive': new FormControl(null)
    });
  }


  // OBJECT

  createObjectWithSet(): void {
    const formValue = this.firebaseCreateForm.value;
    this.createService.createObjectWithSet = formValue;
  }

  createObjectWithUpdate(): void {
    const formValue = this.firebaseCreateForm.value;
    this.createService.createObjectWithUpdate = formValue;
  }


  // LIST

  createListWithPush(): void {
    const formValue = this.firebaseCreateForm.value;
    this.createService.createListWithPush = formValue;
  }


  // HELPER

  listObjectOption(option: boolean): void {
    this.list = option;
  }

}
