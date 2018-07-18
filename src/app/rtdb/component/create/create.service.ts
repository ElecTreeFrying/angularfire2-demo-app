import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private objectRef: AngularFireObject<any>;
  private listRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.objectRef = db.object<any>('rtdb-create-object');
    this.listRef = db.list<any>('rtdb-create-list');
  }

  // OBJECT

  set createObjectWithSet(object: any) {

    this.objectRef.set(object);

  }

  set createObjectWithUpdate(object: any) {

    this.objectRef.update(object);

  }


  // LIST

  set createListWithPush(list: any) {

    this.listRef.push(list);

  }




  /*
    HELPER FUNCTIONS
  */
  get objectValueChanges() { return this.objectRef.valueChanges(); } get listValueChanges() { return this.listRef.valueChanges().pipe( map((values: any[]) => values.reverse()) ); }

}
