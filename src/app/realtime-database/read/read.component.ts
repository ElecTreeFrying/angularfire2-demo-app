import { Component, OnInit } from '@angular/core';
import { AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { ReadService } from './read.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  people: Observable<any> | AngularFireObject<any> | AngularFireList<any>;
  list: boolean = true;

  constructor(private readService: ReadService) { }

  ngOnInit() {
    this.people = this.readService.personRef_object;

    this.readService.getListPeopleSnapshotChanges.subscribe((response: AngularFireAction<DatabaseSnapshot>[]) => {
      console.log('List snapshotChanges', response);

      response.forEach(action => {
        console.log('-----------------------');
        console.log('type', action.type);
        console.log('key', action.key);
        console.log('previous key', action.prevKey);
        console.log('payload', action.payload);
      })
    });
  }


  // OBJECT

  readObjectWithValueChanges(): void {
    this.people = this.readService.getObjectPeopleValueChanges;

    this.readService.getObjectPeopleValueChanges.subscribe((response: any) => {
      console.log('Object valueChanges', response);
    });
  }


  // LIST

  readlistWithValueChanges(): void {
    this.people = this.readService.getListPeopleValueChanges;

    this.readService.getListPeopleValueChanges.subscribe((response: any) => {
      console.log('List valueChanges', response);
    });
  }

  readlistWithSnapshotChanges(): void {
    this.people = this.readService.getListPeopleSnapshotChanges;

    this.readService.getListPeopleSnapshotChanges.subscribe((response: any) => {
      console.log('List snapshotChanges', response);
    });
  }


  // HELPER

  listObjectOption(option: boolean): void {
    this.list = option;

    this.people =
      option === true
        ? this.readService.personRef_list
        : this.readService.personRef_object;
  }

}
