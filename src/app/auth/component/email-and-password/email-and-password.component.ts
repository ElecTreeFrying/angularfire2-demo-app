import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-email-and-password',
  templateUrl: './email-and-password.component.html',
  styleUrls: ['./email-and-password.component.scss']
})
export class EmailAndPasswordComponent implements OnInit {

  signupForm: FormGroup;
  signinForm: FormGroup;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private auth: AuthService
  ) {
    this.signupForm = fb.group({
      'email': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ]
    })

    this.signinForm = fb.group({
      'email': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ]
    })
  }

  ngOnInit() {
  }

  signup() {
    if (this.signupForm.invalid) return;

    this.auth.signUp(this.signupForm.value);

    this.signupForm.reset();
  }

  signin() {
    if (this.signinForm.invalid) return;

    this.auth.signIn(this.signinForm.value);

    this.signinForm.reset();
  }

}
