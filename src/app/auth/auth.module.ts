import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
} from '@angular/material';

import { AuthComponent } from './component/auth.component';
import { EmailAndPasswordComponent } from './component/email-and-password/email-and-password.component';
import { AnonymouslyComponent } from './component/anonymously/anonymously.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';
import { UpdateEmailComponent } from './component/update-email/update-email.component';
import { UpdatePasswordComponent } from './component/update-password/update-password.component';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [
    AuthComponent,
    EmailAndPasswordComponent,
    AnonymouslyComponent,
    SocialMediaComponent,
    SignOutComponent,
    UpdateEmailComponent,
    UpdatePasswordComponent,
    UpdateProfileComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
