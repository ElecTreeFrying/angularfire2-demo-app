import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private objectRef: AngularFireObject<any>;
  private listRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.objectRef = db.object<any>('rtdb-update-object');
    this.listRef = db.list<any>('rtdb-update-list');
  }

  // OBJECT

  set updateObjectWithSet(object: any) {

    this.objectRef.set(object);

  }

  set updateObjectWithUpdate(object: any) {

    this.objectRef.update(object);

  }


  // LIST

  updateListWithSet(key: string, list: any) {

    this.listRef.set(key, list);

  }

  updateListWithUpdate(key: string, list: any) {

    this.listRef.update(key, list);

  }




  /*
    HELPER FUNCTIONS
  */
  get objectSnapshotChanges() { return this.objectRef.snapshotChanges().pipe( map((value: any) => ({ pushID: value.key, ...value.payload.toJSON() })) ) }  get listSnapshotChanges() { return this.listRef.snapshotChanges().pipe( map((values: any[]) => values.map((value: any) => ({ pushID: value.key, ...value.payload.toJSON() }))) ) }

}
