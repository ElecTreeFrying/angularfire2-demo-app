import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class DeleteService {

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

  deleteObject(): void {
    this.personRef_object.remove();
  }


  // LIST

  get getListPeople(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  deleteList(): void {
    this.personRef_list.remove();
  }

  set deleteListByKey(key: string) {
    this.personRef_list.remove(key);
  }

}
