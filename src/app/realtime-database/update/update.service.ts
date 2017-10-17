import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class UpdateService {

  personRef_object: AngularFireObject<any>;
  personRef_list: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.personRef_object = this.db.object('rtdb_object_create');
    this.personRef_list = this.db.list<any>('rtdb_list_create');
  }

  // OBJECT

  get getObjectPeople(): Observable<{}> {
    return this.personRef_object.valueChanges();
  }

  set updateObjectWithSet(person: any) {
    this.personRef_object.set(person);
  }

  set updateObjectWithUpdate(person: any) {
    this.personRef_object.update(person);
  }


  // LIST

  get getListPeople(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  updateListWithSet(key: string, people: any): void {
    this.personRef_list.set(key, people);
  }

  updateListWithUpdate(key: string, people: any): void {
    this.personRef_list.update(key, people);
  }

}
