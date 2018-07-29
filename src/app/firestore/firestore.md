
# Cloud Firestore

I showed here how to setup `angularfire2/firestore` to your angular app, how to use `AngularFireDatabase` in a service or component and how to use some simple firebase `firestore` methods using angularfire2 library.


### [Cloud firestore setup](#setup)

Import `AngularFireModule` and `AngularFirestoreModule` in `app.module.ts`

``` javascript
import { AngularFirestoreModule } from 'angularfire2/firestore';
```

``` javascript
@NgModule({
  ...
  imports: [
    ...
    AngularFirestoreModule,
    ...
  ],
  ...
})
```

### [How to use `AngularFirestore` in a service / component](#how)

Import `AngularFirestore` and declare in constructor.

``` javascript
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
...

constructor(private db: AngularFirestore) {
  ...
}
```

<br>


## Create

``` javascript
private ref: AngularFirestoreCollection<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.ref = db.collection<any>('collection-name');
}
```

Add document to `firestore` collection using `add`.

``` javascript
addDocument(doc: any) {

  this.ref.add(doc);

}}
```



## Read

``` javascript
private ref: AngularFirestoreCollection<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.ref = db.collection<any>('collection-name');
}
```

Read `firestore` collection using `valueChanges` and `snapshotChanges`.

``` javascript
get docValueChanges() {

  return this.ref.valueChanges();

}

get docSnapshotChanges() {

  return this.ref.snapshotChanges().pipe(

    map((values: any[]) => {

      return values.map((value: any) => {
        const doc = value.payload.doc;
        return {
          pushID: doc.id,
          ...doc.data()
        };
      })
    })
  )

}
```



## Update

``` javascript
private ref: AngularFirestoreCollection<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.ref = db.collection<any>('collection-name');
}
```

Okay so this is a personal preference. This is how I use update in `firestore`. You might be wondering what is the `counter: number = 0;` for? `snapshotChanges` returns an observable and is being called everytime a **document** inside the `collection` it is referenced to is *added*, *removed*, or *changed/modified*. As soon as you call the method `updateDocument`, `snapshotChanges` will emit values three times. Without `if (this.counter !== 0) ref.unsubscribe();` your client will end up updating the document to its previous and new data three times. it would result to your data being updated three times to previous and new data three times.

You might be wondering why I subscribed to `snapshotChanges`? In this case if `subscribe` is not called, `snapshotChanges` will not emit enything.


``` javascript

counter: number = 0;

updateDocument(key: string, data: any) {

  this.counter = 0;
  const ref = this.ref.snapshotChanges().pipe(

    map((values: any[]) => {
      if (this.counter !== 0) ref.unsubscribe();

      return values.map((value: any) => {
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
```



## Delete

``` javascript
private ref: AngularFirestoreCollection<any>;
```

``` javascript
constructor(private db: AngularFireDatabase) {
  this.ref = db.collection<any>('collection-name');
}
```

Okay so this is a personal preference. This is how I use delete documents in `firestore`. You might be wondering what is the `counter: number = 0;` for? `snapshotChanges` returns an observable and is being called everytime a **document** inside the `collection` it is referenced to is *added*, *removed*, or *changed/modified*. As soon as `removeEntireCollection/removeDocument` is called, `snapshotChanges` will emit values three times. Without `if (this.counter !== 0) ref.unsubscribe();` your client will end up repeating the `map` operation inside the `pipe` three times.

You might be wondering why I subscribed to `snapshotChanges`? In this case if `subscribe` is not called, `snapshotChanges` will not emit enything.

``` javascript
removeEntireCollection() {

  this.counter = 0;
  const ref = this.ref.snapshotChanges().pipe(

    map((values: any[]) => {
      if (this.counter !== 0) ref.unsubscribe();
      this.counter++;

      return values.map((value: any) => {

        const doc = value.payload.doc;

        doc.ref.delete();

        return doc.data();
      });
    })
  ).subscribe(() => { });

}

removeDocument(key: string) {

  this.counter = 0;
  const ref = this.ref.snapshotChanges().pipe(

    map((values: any[]) => {
      if (this.counter !== 0) ref.unsubscribe();

      return values.map((value: any) => {
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
```
