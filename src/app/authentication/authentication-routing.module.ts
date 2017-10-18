import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    { path: '', component: SignUpComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'sign-out', component: SignOutComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'manage-users', component: ManageUsersComponent }
  ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
