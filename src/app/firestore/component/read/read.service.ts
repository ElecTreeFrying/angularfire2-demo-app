import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.ref = db.collection<any>('firestore-read');
  }

  get docValueChanges() {

    return this.ref.valueChanges();

  }

  get docSnapshotChanges() {

    return this.ref.snapshotChanges().pipe(

      map((values: any[]) => {

        return values.map((value: DocumentChangeAction<any>) => {
          const doc = value.payload.doc;
          return {
            pushID: doc.id,
            ...doc.data()
          };
        })
      })
    )

  }

}
