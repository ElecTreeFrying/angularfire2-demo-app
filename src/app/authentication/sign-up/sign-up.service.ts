import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class SignUpService {

  constructor(private afAuth: AngularFireAuth) { }

  signUpWithEmailAndPassword(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((authState: any) => {

        console.log(authState);

      }).catch((e) => {

        console.log(e);

      });
  }

}
