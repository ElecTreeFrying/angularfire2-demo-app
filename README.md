# Angularfire2 API Showcase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7

## DEMO - [angularfire2 api showcase][1-link]

## Features

*   Authentication
*   Realtime Database
*   **Firestore** _(new)_
*   Storage
*   Hosting

### Authentication

[DOC|Repo][auth]  / [Demo][auth-demo]

*   Managing users
*   Sign up social/email
*   Sign in
*   Sign out

### Realtime Database

[DOC|Repo][rtdb] / [Demo][rtdb-demo]

Covers CRUD Operations in both **List** & **Objects**

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


## Firebase Deployment

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
