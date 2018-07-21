import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fire: AngularFireAuth) {

    fire.authState.subscribe((state) => {
      state !== null ? console.log(state) : 0;
    });

  }

  signUp(auth) {
    return this.fire.auth.createUserWithEmailAndPassword(auth.email, auth.password);
  }

  signIn(auth) {
    return this.fire.auth.signInWithEmailAndPassword(auth.email, auth.password);
  }

  signAnonymously() {
    return this.fire.auth.signInAnonymously();
  }

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

  signOut() {
    return this.fire.auth.signOut();
  }

  updateEmail(form: any, newEmail: string) {

    return this.signIn(form).then((api) => {
      return api.user.updateEmail(newEmail);
    });

  }

  updatePassword(form: any, newPassword: string) {

    return this.signIn(form).then((api) => {
      return api.user.updatePassword(newPassword);
    });

  }

  updateProfile(profile: any) {

    return this.fire.auth.currentUser.updateProfile({
      displayName: profile.displayName,
      photoURL: profile.photoURL
    });

  }

  private socialAuth(provider: auth.AuthProvider) {
    return this.fire.auth.signInWithPopup(provider);
  }

}
