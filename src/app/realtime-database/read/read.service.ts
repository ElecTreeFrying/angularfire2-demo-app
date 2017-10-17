import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class ReadService {

  personRef_object: AngularFireObject<any>;
  personRef_list: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.personRef_object = this.db.object('rtdb_object_create');
    this.personRef_list = this.db.list<any>('rtdb_list_create');
  }

  // OBJECT

  get getObjectPeopleValueChanges(): Observable<{any}> {
    return this.personRef_object.valueChanges();
  }


  // LIST

  get getListPeopleValueChanges(): Observable<{any}[]> {
    return this.personRef_list.valueChanges();
  }

  get getListPeopleSnapshotChanges(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  get getListPeopleSnapshotChangesAdded(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges(['child_added']).map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  get getListPeopleSnapshotChangesChanged(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges(['child_changed']).map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  get getListPeopleSnapshotChangesRemoved(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges(['child_removed']).map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  get getListPeopleSnapshotChangesMoved(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges(['child_moved']).map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

}
