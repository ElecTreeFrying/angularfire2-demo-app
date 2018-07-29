# Angular Firebase Demo App

Mini [angularfire2][af2] API showcase of `angularfire2/auth`, `angularfire2/database`, `angularfire2/firestore` and `angularfire2/storage`, tutorials, snippet compilations and [demo][demo] app.

### Getting started

Download [firebase][fb] and [angularfire2][af2] packages `npm i firebase angularfire2 --save` Import these in your `app.module.ts` and setup environments folder. see how to setup environments folder in Usage header below.

``` javascript
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
```

``` javascript
@NgModule({
  ...
  imports: [
    ...
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,

  ],

})
```

### Authentication

[Snippets][auth] / [Demo][auth-demo] / [firebase docs][fb-doc] / [angularfire2 docs][af2-doc]

> For `angularfire2/auth` mini API showcase and snippet collection, go [here][auth].

*   Sign up / Sign in with Email and Password
*   Sign in Anonymously
*   Sign out
*   Authenticate using Social Media accounts
*   Update Email
*   Update Password
*   Update Profile

##### APIs used

|                              | API                                |
|------------------------------|------------------------------------|
| Sign up (Email and password) | `createUserWithEmailAndPassword()` |                    
| Sign in (Email and password) | `signInWithEmailAndPassword()`     |
| Sign out                     | `signOut()`                        |
| Social Media                 | `signInWithPopup()`                |
| Update email address         | `updateEmail()`                    |
| Update password              | `updatePassword()`                 |
| Update profile               | `updateProfile()`                  |




### Realtime Database

[Snippets][rtdb]  / [Demo][rtdb-demo] / [firebase docs][fb-doc] / [angularfire2 docs][af2-doc]

CRUD Operations in both **List** & **Object**

> For `angularfire2/database` mini API showcase and snippet collection, go [here][rtdb].


##### APIs used

|        | Object                                | List                                  |
|--------|---------------------------------------|---------------------------------------|
| Create | `set()` / `update()`                  | `push()`                              |
| Read   | `valueChanges()`, `snapshotChanges()` | `valueChanges()`, `snapshotChanges()` |
| Update | `set()` / `update()`                  | `set()` / `update()`                  |
| Delete | `remove()`                            | `remove()`                            |





### Cloud Firestore

[Snippets][firestore]  / [Demo][firestore-demo] / [firebase docs][fb-doc] / [angularfire2 docs][af2-doc]

> For `angularfire2/firestore` mini API showcase and snippet collection, go [here][firestore].

##### APIs used

|        | API                                   |
|--------|---------------------------------------|
| Create | `add()`                               |
| Read   | `valueChanges()`, `snapshotChanges()` |
| Update | `update()`                            |
| Delete | `remove()`                            |





### Firebase Storage

[Snippets][storage]  / [Demo][storage-demo] / [firebase docs][fb-doc] / [angularfire2 docs][af2-doc]

> For `angularfire2/storage` mini API showcase and snippet collection, go [here][storage].

*   Upload file
*   Download file
*   Remove file

##### APIs used

|          | API                |
|----------|--------------------|
| Upload   | `put()`            |
| Download | `getDownloadURL()` |
| Delete   | `delete()`         |


## Usage

*   `git clone https://github.com/ElecTreeFrying/angularfire2-demo-app.git`
*   `cd angularfire2-demo-app`
*   `npm install`

Create your own [firebase app](https://console.firebase.google.com).

1.  Select _Add Project_
1.  Select Authentications
1.  Click copy **WEB SETUP**
1.  Create the environment files below in `src/environments/`.

    **environment.prod.ts**

    ``` javascript
    export const environment = {
      production: true,
      firebaseConfig: { **PASTE WEB SETUP** }
    };

    ```

    **environment.ts**

    ``` javascript
    export const environment = {
      production: false,
      firebaseConfig: { **PASTE WEB SETUP** }
    };

    ```

## Version

* [x] @angular/cli: `6.1.1`
* [x] firebase: `5.3.0`
* [x] angularfire2: `5.0.0-rc.11`

#### star and fork 🙏🙌 or contribute ❤️

[contact me](https://.com)

## License

MIT


[af2]: https://github.com/angular/angularfire2/
[af2-doc]: https://github.com/angular/angularfire2/tree/master


[fb]: https://github.com/firebase/firebase-js-sdk/
[fb-doc]: https://firebase.google.com/docs/web/setup


[demo]: https://angularfire2-demo-app.firebaseapp.com/

[rtdb]: https://github.com/ElecTreeFrying/angularfire2-demo-app/tree/master/src/app/rtdb/rtdb.md
[rtdb-demo]: https://angularfire2-demo-app.firebaseapp.com/rtdb

[firestore]: https://github.com/ElecTreeFrying/angularfire2-demo-app/tree/master/src/app/firestore/firestore.md
[firestore-demo]: https://angularfire2-demo-app.firebaseapp.com/firestore

[auth]: https://github.com/ElecTreeFrying/angularfire2-demo-app/tree/master/src/app/auth/auth.md
[auth-demo]: https://angularfire2-demo-app.firebaseapp.com/auth

[storage]: https://github.com/ElecTreeFrying/angularfire2-demo-app/tree/master/src/app/storage/storage.md
[storage-demo]: https://angularfire2-demo-app.firebaseapp.com/storage
