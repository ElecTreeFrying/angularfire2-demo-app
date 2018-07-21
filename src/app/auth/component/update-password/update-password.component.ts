import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  reauthenticateForm: FormGroup;
  password: FormControl;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private auth: AuthService
  ) {
    this.reauthenticateForm = fb.group({
      'email': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ]
    })

    this.password = new FormControl('', [ Validators.required ]);
  }

  ngOnInit() {
  }

  _email: string = '';
  _password: string = '';

  reauthenticate() {
    if (this.reauthenticateForm.invalid) return;

    const form = this.reauthenticateForm.value;

    this._email = form.email;
    this._password = form.password;
  }

  updatePassword() {
    if (this.password.invalid) return;

    const form = this.password.value;

    this.auth.updatePassword({
      email: this._email,
      password: this._password
    }, form);
  }

}
