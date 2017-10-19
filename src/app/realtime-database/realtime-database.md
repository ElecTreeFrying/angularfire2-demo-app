## [DEMO][rtdb-demo],  [REPO][rtdb]

# Usage

*   `git clone https://github.com/ElecTreeFrying/angularfire2-api-showcase.git angularfire2-demo`
*   `cd angularfire2-demo`
*   `npm install`

Create an account [firebase console][2-link].

1.  Select _Add Project_
1.  Select Authentications
1.  Click copy **WEB SETUP**

1.  Create the environment files below in `src/environments/`.

    **environment.prod.ts**

    ```
    export const environment = {
      production: true,
      firebaseConfig: { **WEB SETUP** }
    };

    ```

    **environment.ts**

    ```
    export const environment = {
      production: false,
      firebaseConfig: { **WEB SETUP** }
    };

    ```

# Create

**create.service.ts**

```ts
// OBJECT

set createObjectWithSet(person: any) {
  this.personRef_object.set(person);
}

set createObjectWithUpdate(person: any) {
  this.personRef_object.update(person);
}


// LIST

set createListWithPush(person: any) {
  this.personRef_list.push(person);
}
```


# Read

**read.service.ts**

```ts
// OBJECT

get getObjectPeopleValueChanges(): Observable<{any}> {
  return this.personRef_object.valueChanges();
}


// LIST

get getListPeopleValueChanges(): Observable<{any}[]> {
  return this.personRef_list.valueChanges();
}

get getListPeopleSnapshotChanges(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
  return this.personRef_list.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  });;
}

get getListPeopleSnapshotChangesAdded(): Observable<AngularFireAction<DatabaseSnapshot>[]> {
  return this.personRef_list.snapshotChanges(['child_added']).map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  });
}

get getListPeopleSnapshotChangesChanged(): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

get getListPeopleSnapshotChangesRemoved(): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

get getListPeopleSnapshotChangesMoved(): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

```

# Update

**update.service.ts**

```ts
// OBJECT

set updateObjectWithSet(person: any) {
  this.personRef_object.set(person);
}

set updateObjectWithUpdate(person: any) {
  this.personRef_object.update(person);
}


// LIST

updateListWithSet(key: string, people: any): void {
  this.personRef_list.set(key, people);
}

updateListWithUpdate(key: string, people: any): void {
  this.personRef_list.update(key, people);
}
```

# Delete

**delete.service.ts**

```ts
// OBJECT

deleteObject(): void {
  this.personRef_object.remove();
}


// LIST

deleteList(): void {
  this.personRef_list.remove();
}

set deleteListByKey(key: string) {
  this.personRef_list.remove(key);
}
```


#### Query

**query.service.ts**

```ts
// SORTING

get queryOrderByKey(): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

get queryOrderByValue(): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

queryOrderByChild(child: string): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }


// FILTERING

queryEqualTo(child: string, equal: string): Observable<AngularFireAction<DatabaseSnapshot>[]> {
  const parsedEqual = this.parseEqual(equal);
  const list = this.db.list<any>('rtdb_query', (query: DatabaseReference) => {
    return query.orderByChild(child).equalTo(parsedEqual);
  });

  return this.mapNewChanges(list);
}

queryStartAt(child: string, start: number): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

queryEndAt(child: string, end: number): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

queryLimitToFirst(child: string, limit: number): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }

queryLimitToLast(child: string, limit: number): Observable<AngularFireAction<DatabaseSnapshot>[]> { ... }
```

[2-link]: https://console.firebase.google.com
[rtdb]: https://github.com/ElecTreeFrying/angularfire2-api-showcase/tree/master/src/app/realtime-database
[rtdb-demo]: https://workshop-demo-65669.firebaseapp.com/rtdb
