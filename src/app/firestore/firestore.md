## [DEMO][firestore-demo],  [REPO][firestore]

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

# TODO

# TODO

# TODO

[2-link]: https://console.firebase.google.com
[firestore]: https://github.com/ElecTreeFrying/angularfire2-api-showcase/tree/master/src/app/firestore
[firestore-demo]: https://workshop-demo-65669.firebaseapp.com/firestore
