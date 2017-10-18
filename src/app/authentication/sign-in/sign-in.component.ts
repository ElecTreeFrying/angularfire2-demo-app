import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SignInService } from './sign-in.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private signInService: SignInService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onSignin(option: string) {
    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];

    if (option === 'email') {
      this.signInService.signInWithEmailAndPassword(email, password);
    } else if (option === 'google') {
      this.signInService.signInWithGoogle();
    } else if (option === 'facebook') {
      this.signInService.signInWithFacebook();
    } else if (option === 'twitter') {
      this.signInService.signInWithTwitter();
    } else if (option === 'github') {
      this.signInService.signInWithGithub();
    } else if (option === 'anonymous') {
      this.signInService.signInAnonymously();
    } else {
      throw new Error();
    }

  }

}
