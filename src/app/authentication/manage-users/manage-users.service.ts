import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ManageUsersService {

  constructor(private afAuth: AngularFireAuth) { }

  authState(): void {
    this.afAuth.authState.subscribe((auth) => {
      console.log(auth);
    });
  }

}
