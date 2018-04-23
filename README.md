# Angularfire2 API Showcase

**angularfire2** demo application showing the use cases of methods  in `angularfire2/auth`, `/database` and `/firestore`, _firebase storage_


## DEMO - [angularfire2 demo-app][1-link]

# Incomplete angularfire2-demo-app revamped [repo](https://github.com/ElecTreeFrying/demoshit), [demo](https://angularfire2-demo-app.firebaseapp.com)

## Features

*   Authentication
*   Realtime Database
*   **Firestore** _(new)_
*   Storage

### Authentication

[DOC|Repo][auth]  / [Demo][auth-demo]

`angularfire2/auth` API Showcase, visit the [repo][auth] for more details, **authentication** demo-app includes example code for firebase social media logins and email signin and signup and example code for managing users.

*   Managing users
*   Sign up social/email
*   Sign in
*   Sign out

### Realtime Database

[DOC|Repo][rtdb] / [Demo][rtdb-demo]

Covers CRUD Operations in both **List** & **Objects**

`angularfire2/database` API Showcase, visit the [repo][rtdb] for more details, **realtime-database** demo app includes example codes on how to write, read, update and delete documents in _**rt-db**_ using lists and objects, visit [demo-app][rtdb-demo] for more info.


##### APIs used

|        | Objects               | Lists                                 |
|--------|-----------------------|---------------------------------------|
| Create | `set()` / `update()`  | `push()`                              |
| Read   | `valueChanges()`      | `valueChanges()`, `snapshotChanges()` |
| Update | `set()` / `update()`  | `set()` / `update()`                  |
| Delete | `remove()`            | `remove()`                            |



### Firestore

[DOC|Repo][firestore] / [Demo][firestore-demo]

_**TODO**_

### Storage

[DOC|Repo][storage] / [Demo][storage-demo]

**firebase** `Storage` API Showcase, visit the [repo][storage] for more details, **firebase storage** demo app includes example codes on how to upload, download and remove files in  _**Storage**_, please visit [demo-app][storage-demo] for more info.

*   Upload files
*   Download files
*   Remove files


## Usage

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



_**TODO**_

_**TODO**_

_**TODO**_


[1-link]: https://workshop-demo-65669.firebaseapp.com
[2-link]: https://console.firebase.google.com

[rtdb]: https://github.com/ElecTreeFrying/angularfire2-api-showcase/tree/master/src/app/realtime-database/realtime-database.md
[rtdb-demo]: https://workshop-demo-65669.firebaseapp.com/rtdb

[firestore]: https://github.com/ElecTreeFrying/angularfire2-api-showcase/tree/master/src/app/firestore/firestore.md
[firestore-demo]: https://workshop-demo-65669.firebaseapp.com/firestore

[auth]: https://github.com/ElecTreeFrying/angularfire2-api-showcase/tree/master/src/app/authentication/authentication.md
[auth-demo]: https://workshop-demo-65669.firebaseapp.com/auth

[storage]: https://github.com/ElecTreeFrying/angularfire2-api-showcase/tree/master/src/app/storage/storage.md
[storage-demo]: https://workshop-demo-65669.firebaseapp.com/storage
