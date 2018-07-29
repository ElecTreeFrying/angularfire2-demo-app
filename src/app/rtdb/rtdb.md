
# Realtime Database

I showed here how to setup `angularfire2/database` to your angular app, how to use `AngularFireDatabase` in a service or component and how to use some simple firebase `database` methods using angularfire2 library.


### [Realtime database setup](#setup)

Import `AngularFireModule` and `AngularFireDatabaseModule` in `app.module.ts`

``` javascript
import { AngularFireDatabaseModule } from 'angularfire2/database';
```

``` javascript
@NgModule({
  ...
  imports: [
    ...
    AngularFireDatabaseModule,
    ...
  ],
  ...
})
```

### [How to use `AngularFireDatabase` in a service / component](#how)

Import `AngularFireDatabase` and declare in constructor.

``` javascript
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
...

constructor(private db: AngularFireDatabase) {
  ...
}
```

<br>


## Create

#### OBJECT

``` javascript
private objectRef: AngularFireObject<any>;
```

Create object using `set`.

``` javascript
constructor(private db: AngularFireDatabase) {
  this.objectRef = db.object<any>('collection-name');
}
```

``` javascript
createObjectWithSet(object: any) {

  this.objectRef.set(object);

}
```

Create object using `update`. works the same as `set`.

``` javascript
createObjectWithUpdate(object: any) {

  this.objectRef.update(object);

}
```

#### LIST

``` javascript
private listRef: AngularFireList<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.listRef = db.list<any>('collection-name');
}
```

Add document to list collection using `push`.

``` javascript
createListWithPush(list: any) {

  this.listRef.push(list);

}
```



## Read

#### OBJECT

``` javascript
private objectRef: AngularFireObject<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.objectRef = db.object<any>('collection-name');
}
```

Read object using `valueChanges` and `snapshotChanges`.

``` javascript
objectValueChanges() {
  return this.objectRef.valueChanges();
}

objectSnapshotChanges() {

  return this.objectRef.snapshotChanges().pipe(

    map((value: any) => {

      return {
        pushID: value.key,
        ...value.payload.toJSON()
      };
    })
  )

}
```

#### LIST

``` javascript
private listRef: AngularFireList<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.listRef = db.list<any>('collection-name');
}
```

Read `list` collection using `valueChanges` and `snapshotChanges`.

``` javascript
listValueChanges() {

  return this.listRef.valueChanges();

}

listSnapshotChanges() {

  return this.listRef.snapshotChanges().pipe(

    map((values: any[]) => {

      return values.map((value: any) => {

        return {
          pushID: value.key,
          ...value.payload.toJSON()
        };
      })
    })
  )

}
```



## Update

#### OBJECT

``` javascript
private objectRef: AngularFireObject<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.objectRef = db.object<any>('collection-name');
}
```

Update `object` using `set` and `update`.

``` javascript
// destructive update
updateObjectWithSet(object: any) {

  this.objectRef.set(object);

}

updateObjectWithUpdate(object: any) {

  this.objectRef.update(object);

}
```

#### LIST

``` javascript
private listRef: AngularFireList<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.listRef = db.list<any>('collection-name');
}
```

Update a document in `list` collection using `set` and `update`.

``` javascript
updateListWithSet(key: string, list: any) {

  this.listRef.set(key, list);

}

updateListWithUpdate(key: string, list: any) {

  this.listRef.update(key, list);

}
```



## Delete

#### OBJECT

``` javascript
private objectRef: AngularFireObject<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.objectRef = db.object<any>('collection-name');
}
```

Remove `object`.

``` javascript
removeObjectWithRemove() {

  this.objectRef.remove();

}
```

#### LIST

``` javascript
private listRef: AngularFireList<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.listRef = db.list<any>('collection-name');
}
```

Remove the entire `list`.

``` javascript
removeEntireList() {

  this.listRef.remove();

}
```

Remove a document in `list`.

``` javascript
removeListWithRemove(key: string) {

  this.listRef.remove(key);

}
```
