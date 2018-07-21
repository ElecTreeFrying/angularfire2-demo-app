import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private ref: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.ref = db.collection<any>('firestore-create');
  }

  set addDocument(doc: any) {

    this.ref.add(doc);

  }




  /*
    HELPER FUNCTIONS
  */
  get refValueChanges() { return this.ref.valueChanges(); }

}
