import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase';


@Injectable()
export class RemoveService {

  uploadRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.uploadRef = this.db.list<any>('uploads');
  }

  get getListUploads(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.uploadRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  onRemove(name: string, key: string): void {
    this.deleteFileData(key).then(() => {
      this.deleteFileStorage(name)
    })
  }


  // HELPERS

  private deleteFileData(key: string): Promise<void> {
    return this.db.list(`uploads/`).remove(key);
  }

  private deleteFileStorage(name:string): void {
    const storageRef = firebase.storage().ref();
    storageRef.child(`uploads/${name}`).delete()
  }

}
