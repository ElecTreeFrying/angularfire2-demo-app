import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private objectRef: AngularFireObject<any>;
  private listRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.objectRef = db.object<any>('rtdb-read-object');
    this.listRef = db.list<any>('rtdb-read-list');
  }

  // OBJECT

  get objectValueChanges() {
    return this.objectRef.valueChanges();
  }

  get objectSnapshotChanges() {
    return this.objectRef.snapshotChanges().pipe(
      map((value: AngularFireAction<DatabaseSnapshot<any>>) => {
        return { pushID: value.key, ...value.payload.toJSON() }
      })
    )
  }


  // LIST

  // VALUE CHANGES

  get listValueChanges() {
    return this.listRef.valueChanges();
  }

  // SNAPSHOT CHANGES

  get listSnapshotChanges() {
    return this.listRef.snapshotChanges().pipe(
      map((values: any[]) => {
        return values.map((value: AngularFireAction<DatabaseSnapshot<any>>) => {
          return { pushID: value.key, ...value.payload.toJSON() }
        })
      })
    )
  }

}
