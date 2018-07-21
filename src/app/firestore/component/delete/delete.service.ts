import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private ref: AngularFirestoreCollection<any>;

  counter: number = 0;

  constructor(private db: AngularFirestore) {
    this.ref = db.collection<any>('firestore-delete');
  }

  removeEntireCollection() {

    this.counter = 0;
    const ref = this.ref.snapshotChanges().pipe(

      map((values: DocumentChangeAction<any>[]) => {
        if (this.counter !== 0) ref.unsubscribe();
        this.counter++;

        return values.map((value: DocumentChangeAction<any>) => {

          const doc = value.payload.doc;

          doc.ref.delete();

          return doc.data();
        });
      })
    ).subscribe(() => { });

  }

  set removeDocument(key: string) {

    this.counter = 0;
    const ref = this.ref.snapshotChanges().pipe(

      map((values: DocumentChangeAction<any>[]) => {
        if (this.counter !== 0) ref.unsubscribe();

        return values.map((value: DocumentChangeAction<any>) => {
          const doc = value.payload.doc;

          if (doc.id === key) {
            doc.ref.delete();
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
  get refSnapshotChanges() { return this.ref.snapshotChanges().pipe( map((values: any[]) => { return values.map((value) => { const doc = value.payload.doc; return { pushID: doc.id, ...doc.data() }; }); }) ) } setInit() { this.counter = 0; const ref = this.ref.snapshotChanges().pipe( map((values: DocumentChangeAction<any>[]) => { if (this.counter !== 0) ref.unsubscribe(); this.counter++; return values.map((value: DocumentChangeAction<any>) => { const doc = value.payload.doc; doc.ref.delete(); return doc.data(); }); }) ).subscribe(() => { }); setTimeout(() => { this.ref.add({ username: 'Madara', password: 77777, number: 60 }); this.ref.add({ username: 'Obito', password: 88888, number: 20 }); this.ref.add({ username: 'ChibakuTensei', password: 99999, number: 99 }); }, 1500); }

}
