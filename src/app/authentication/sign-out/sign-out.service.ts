import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class SignOutService {

  constructor(private afAuth: AngularFireAuth) { }

  onSignout() {
    this.afAuth.auth.signOut()
      .then((authState: any) => {

        console.log(authState);

      }).catch((e) => {

        console.log(e);

      });
  }

}
