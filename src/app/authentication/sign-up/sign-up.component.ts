import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SignUpService } from './sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private signUpService: SignUpService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onSignup(option: string) {
    const email = this.registerForm.value['email'];
    const password = this.registerForm.value['password'];

    this.signUpService.signUpWithEmailAndPassword(email, password);
  }

}
