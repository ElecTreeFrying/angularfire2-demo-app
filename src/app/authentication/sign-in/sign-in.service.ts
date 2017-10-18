import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable()
export class SignInService {

  constructor(private afAuth: AngularFireAuth) { }

  signInWithEmailAndPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user: any) => {

        console.log(user);

      }).catch((e) => {

        console.log(e);

      });
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.socialSignup(provider);
  }

  signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.socialSignup(provider);
  }

  signInWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
    this.socialSignup(provider);
  }

  signInWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    this.socialSignup(provider);
  }

  signInAnonymously() {
    this.afAuth.auth.signInAnonymously()
      .then((authState: any) => {

        console.log(authState);

      }).catch((e) => {

        console.log(e);

      });
  }


  // HELPER

  private socialSignup(provider: any) {
    this.afAuth.auth.signInWithPopup(provider)
      .then((authState: any) => {

        console.log(authState);

      }).catch((e) => {

        console.log(e);

      });
  }

}
