import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class DownloadService {

  uploadRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.uploadRef = this.db.list<any>('uploads');
  }

  get getListUploads(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.uploadRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  set onDownload(url: string) {
    window.open(url, '_blank')
  }

}
