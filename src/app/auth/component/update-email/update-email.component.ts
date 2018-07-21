import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.scss']
})
export class UpdateEmailComponent implements OnInit {

  reauthenticateForm: FormGroup;
  email: FormControl;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private auth: AuthService
  ) {
    this.reauthenticateForm = fb.group({
      'email': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ]
    })

    this.email = new FormControl('', [ Validators.required ]);
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

  updateEmail() {
    if (this.email.invalid) return;

    const form = this.email.value;

    this.auth.updateEmail({
      email: this._email,
      password: this._password
    }, form);
  }

}
