import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private objectRef: AngularFireObject<any>;
  private listRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.objectRef = db.object<any>('rtdb-delete-object');
    this.listRef = db.list<any>('rtdb-delete-list');
  }

  // OBJECT

  removeObjectWithRemove() {

    this.objectRef.remove();

  }


  // LIST

  removeEntireList() {

    this.listRef.remove();

  }

  set removeListWithRemove(key: string) {

    this.listRef.remove(key);

  }




  /*
    HELPER FUNCTIONS
  */
  get objectSnapshotChanges() { return this.objectRef.snapshotChanges().pipe( map((value: any) => ({ pushID: value.key, ...value.payload.toJSON() })) ) }  get listSnapshotChanges() { return this.listRef.snapshotChanges().pipe( map((values: any[]) => values.map((value: any) => ({ pushID: value.key, ...value.payload.toJSON() }))) ) } setInit() { this.objectRef.remove().then(() => { this.objectRef.set({ username: 'ChibakuTensei', password: 77777, number: 60 }); }); this.listRef.remove().then(() => { this.listRef.push({ username: 'Madara', password: 77777, number: 60 }); this.listRef.push({ username: 'Obito', password: 88888, number: 20 }); this.listRef.push({ username: 'ChibakuTensei', password: 99999, number: 99 }); }); }

}
