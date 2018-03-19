import { Component, OnInit } from '@angular/core';

import { ManageUsersService } from './manage-users.service';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  constructor(private manageUsersService: ManageUsersService) { }

  ngOnInit() {
  }

  authState(): void {
    this.manageUsersService.authState();
  }

}
