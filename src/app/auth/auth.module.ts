import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {
  MatCardModule
} from '@angular/material';

import { AuthComponent } from './component/auth.component';
import { EmailAndPasswordComponent } from './component/email-and-password/email-and-password.component';
import { AnonymouslyComponent } from './component/anonymously/anonymously.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule
  ],
  declarations: [
    AuthComponent,
    EmailAndPasswordComponent,
    AnonymouslyComponent,
    SocialMediaComponent,
    SignOutComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
