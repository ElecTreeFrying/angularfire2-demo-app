
# Authentication

I showed here how to setup `angularfire2/auth` to your angular app, how to use `AngularFireAuth` in a service or component and how to use some simple firebase authentication methods using angularfire2 library.


### [Authentication setup](#setup)

Import `AngularFireModule` and `AngularFireAuthModule` in `app.module.ts`

``` javascript
import { AngularFireAuthModule } from 'angularfire2/auth';
```

``` javascript
@NgModule({
  ...
  imports: [
    ...
    AngularFireAuthModule,
    ...
  ],
  ...
})
```

### [How to use `AngularFireAuth` in a service / component](#how)

Import `AngularFireAuth` and declare in constructor. You might be wondering [why did I use](#social) `auth` from `firebase/app`. Click [here](#social).

``` javascript
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
...

constructor(private fire: AngularFireAuth) { }
```

<br>

## Email and password authentication

### [Sign in with email and password](#in)

``` javascript
signIn(email, password) {
  return this.fire.auth.signInWithEmailAndPassword(email, password);
}
```

### [Sign up with email and password](up)

``` javascript
signUp(email, password) {
  return this.fire.auth.createUserWithEmailAndPassword(email, password);
}
```

### [Sign out](#out)

``` javascript
signOut() {
  return this.fire.auth.signOut();
}
```

### [Authenticate using Social Media account](#social)

A caveat: `import { auth } from 'firebase/app';` To use `auth`.

``` javascript
facebookSignIn() {
  return this.socialAuth(new auth.FacebookAuthProvider());
}

twitterSignIn() {
  return this.socialAuth(new auth.TwitterAuthProvider());
}

googleSignIn() {
  return this.socialAuth(new auth.GoogleAuthProvider());
}

githubSignIn() {
  return this.socialAuth(new auth.GithubAuthProvider());
}
```

``` javascript
private socialAuth(provider: auth.AuthProvider) {
  return this.fire.auth.signInWithPopup(provider);
}
```

<br>

## Update auth

A caveat: It is required to reauthenticate before updating email or password.

### [Update email address](#u-email)


``` javascript
signIn(auth: { email: string, password: string }) {
  return this.fire.auth.signInWithEmailAndPassword(auth.email, auth.password);
}


updateEmail(form: { email: string, password: string }, newEmail: string) {

  return this.signIn(form).then((api) => {
    return api.user.updateEmail(newEmail);
  });

}
```

### [Update password](#u-pass)

``` javascript
updatePassword(form: { email: string, password: string }, newPassword: string) {

  return this.signIn(form).then((api) => {
    return api.user.updatePassword(newPassword);
  });

}
```

### [Update profile](#u-profile)

``` javascript
updateProfile(profile: { displayName: string, photoURL: string }) {

  return this.fire.auth.currentUser.updateProfile({
    displayName: profile.displayName,
    photoURL: profile.photoURL
  });

}
```
