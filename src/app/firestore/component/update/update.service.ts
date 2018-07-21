import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private ref: AngularFirestoreCollection<any>;

  counter: number = 0;

  constructor(private db: AngularFirestore) {
    this.ref = db.collection<any>('firestore-update');
  }

  updateDocument(key: string, data: any) {

    this.counter = 0;
    const ref = this.ref.snapshotChanges().pipe(

      map((values: DocumentChangeAction<any>[]) => {
        if (this.counter !== 0) ref.unsubscribe();

        return values.map((value: DocumentChangeAction<any>) => {
          const doc = value.payload.doc;

          if (doc.id === key) {
            doc.ref.update(data);
            this.counter++;
          }

          return doc.data();
        });
      })
    ).subscribe(() => { });

  }




  /*
    HELPER FUNCTIONS
  */
  get refSnapshotChanges() { return this.ref.snapshotChanges().pipe( map((values: any[]) => { return values.map((value) => { const doc = value.payload.doc; return { pushID: doc.id, ...doc.data() }; }); }) ) }

}
