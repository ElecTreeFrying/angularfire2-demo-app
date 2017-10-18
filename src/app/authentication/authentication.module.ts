import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { OptionsComponent } from './options/options.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ManageUsersService } from './manage-users/manage-users.service';
import { SignUpService } from './sign-up/sign-up.service';
import { SignInService } from './sign-in/sign-in.service';
import { SignOutService } from './sign-out/sign-out.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    AuthenticationComponent,
    ManageUsersComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    OptionsComponent
  ],
  providers: [
    ManageUsersService,
    SignUpService,
    SignInService,
    SignOutService
  ]
})
export class AuthenticationModule { }
