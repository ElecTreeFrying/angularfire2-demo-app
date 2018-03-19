import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot, DatabaseReference } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/Rx';


@Injectable()
export class QueryService {

  personRef_list: AngularFireList<any>;
  child = new Subject<string>();
  path = 'rtdb_query';

  constructor(private db: AngularFireDatabase) {
    this.personRef_list = this.db.list<any>(this.path);
  }

  get getListPeople(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return this.personRef_list.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }


  // SORTING

  get queryOrderByKey(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
      return query.orderByKey();
    });

    return this.mapNewChanges(list);
  }

  get queryOrderByValue(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
      return query.orderByValue();
    });

    return this.mapNewChanges(list);
  }

  queryOrderByChild(child: string): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
        return query.orderByChild(child);
    });

    return this.mapNewChanges(list);
  }


  // FILTERING

  queryEqualTo(child: string, equal: string): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const parsedEqual = this.parseEqual(equal);
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
      return query.orderByChild(child).equalTo(parsedEqual);
    });

    return this.mapNewChanges(list);
  }

  queryStartAt(child: string, start: number): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
      return query.orderByChild(child).startAt(start);
    });

    return this.mapNewChanges(list);
  }

  queryEndAt(child: string, end: number): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
      return query.orderByChild(child).endAt(end);
    });

    return this.mapNewChanges(list);
  }

  queryLimitToFirst(child: string, limit: number): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
      return query.orderByChild(child).limitToFirst(limit);
    });

    return this.mapNewChanges(list);
  }

  queryLimitToLast(child: string, limit: number): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    const list = this.db.list<any>(this.path, (query: DatabaseReference) => {
      return query.orderByChild(child).limitToLast(limit);
    });

    return this.mapNewChanges(list);
  }


  // HELPER

  private mapNewChanges(list: AngularFireList<any>): Observable<AngularFireAction<DatabaseSnapshot>[]> {
    return list.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  private parseEqual(equal: string): boolean | number | string {
    let parsedEqual;
    parsedEqual = equal !== 'true' ? equal !== 'false' ? 'invalid' : false : true;
    parsedEqual = parsedEqual === 'invalid' ? Number(equal) ? Number(equal) : 'invalid' : parsedEqual;
    return parsedEqual = parsedEqual === 'invalid' ? String(equal) ? String(equal) : 'invalid' : parsedEqual;
  }

}
