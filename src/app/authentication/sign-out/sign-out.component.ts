import { Component, OnInit } from '@angular/core';

import { SignOutService } from './sign-out.service';


@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(private signOutService: SignOutService) { }

  ngOnInit() {
  }

  onSignout() {
    this.signOutService.onSignout();
  }

}
