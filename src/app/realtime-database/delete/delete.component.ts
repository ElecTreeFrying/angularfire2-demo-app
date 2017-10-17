import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { DeleteService } from './delete.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  personSelectedForm: FormGroup;
  people: Observable<any> | AngularFireObject<any> | AngularFireList<any>;
  person: {any};
  list: boolean = true;

  constructor(private deleteService: DeleteService) { }

  ngOnInit() {
    this.people = this.deleteService.getObjectPeople;

    this.personSelectedForm = new FormGroup({
      'name': new FormControl(null),
      'age': new FormControl(null),
      'gender': new FormControl(null),
      'isActive': new FormControl(null)
    })
  }

  selectedPerson(person: {any}): void {
    this.person = person;
  }


  // OBJECT

  deleteObject(): void {
    this.deleteService.deleteObject();
  }


  // LIST

  deleteList(): void {
    this.deleteService.deleteList();
  }

  deleteListByKey(key: string): void {
    this.deleteService.deleteListByKey = key;
  }


  // HELPER

  listObjectOption(option: boolean): void {
    this.list = option;

    this.people =
      option === false
        ? this.deleteService.getListPeople
        : this.deleteService.getObjectPeople;
  }

}
