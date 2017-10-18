import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { Upload } from './upload';


@Injectable()
export class UploadService {

  uploadRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.uploadRef = this.db.list<any>('uploads');
  }

  get getListUploads(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.uploadRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  set pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`uploads/${upload.file.name}`).put(upload.file);

    uploadTask.on('state_changed',
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        // upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, (error) => {
        console.log(error)
      }, () => {
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload);
      }
    );
  }


  // HELPERS

  private saveFileData(upload: Upload): void {
    this.db.list(`uploads/`).push(upload);
  }

}
