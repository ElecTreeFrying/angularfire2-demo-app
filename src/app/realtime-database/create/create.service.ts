import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CreateService {

  personRef_object: AngularFireObject<any>;
  personRef_list: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.personRef_object = this.db.object('rtdb_object_create');
    this.personRef_list = this.db.list<any>('rtdb_list_create');
  }

  // OBJECT

  get getObjectPeople(): Observable<{any}> {
    return this.personRef_object.valueChanges();
  }

  set createObjectWithSet(person: any) {
    this.personRef_object.set(person);
  }

  set createObjectWithUpdate(person: any) {
    this.personRef_object.update(person);
  }


  // LIST

  get getListPeople(): Observable<{any}[]> {
    return this.personRef_list.valueChanges();
  }

  set createListWithPush(person: any) {
    this.personRef_list.push(person);
  }

}
