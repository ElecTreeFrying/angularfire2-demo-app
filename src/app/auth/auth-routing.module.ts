import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './component/auth.component';
import { EmailAndPasswordComponent } from './component/email-and-password/email-and-password.component';
import { AnonymouslyComponent } from './component/anonymously/anonymously.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: 'email-and-password', component: EmailAndPasswordComponent },
    { path: 'anonymously', component: AnonymouslyComponent },
    { path: 'social-media', component: SocialMediaComponent },
    { path: 'sign-out', component: SignOutComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
