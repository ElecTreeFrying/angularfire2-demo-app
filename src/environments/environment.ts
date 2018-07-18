// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC8Gf4GCVu_notQr4-wjH9UTRb9VBSmJUk",
    authDomain: "angularfire2-demo-app.firebaseapp.com",
    databaseURL: "https://angularfire2-demo-app.firebaseio.com",
    projectId: "angularfire2-demo-app",
    storageBucket: "angularfire2-demo-app.appspot.com",
    messagingSenderId: "469879317588"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
