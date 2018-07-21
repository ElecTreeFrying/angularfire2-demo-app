import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  signinForm: FormGroup;
  profileForm: FormGroup;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private auth: AuthService
  ) {
    this.signinForm = fb.group({
      'email': [ '', [ Validators.required ] ],
      'password': [ '', [ Validators.required ] ]
    })

    this.profileForm = fb.group({
      'displayName': [ '', [ Validators.required ] ],
      'photoURL': [ '', [ Validators.required ] ]
    })
  }

  ngOnInit() {
  }

  signIn() {
    if (this.signinForm.invalid) return;

    const form = this.signinForm.value;

    this.auth.signIn(form);
  }

  updateProfile() {
    if (this.profileForm.invalid) return;

    const form = this.profileForm.value;

    this.auth.updateProfile(form);
  }

}
