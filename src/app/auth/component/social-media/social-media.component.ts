import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSocialAuth(provider: string) {

    switch (provider) {
      case 'facebook': {
        this.auth.facebookSignIn();
        break;
      }
      case 'twitter': {
        this.auth.twitterSignIn();
        break;
      }
      case 'google': {
        this.auth.googleSignIn();
        break;
      }
      case 'github': {
        this.auth.githubSignIn();
        break;
      }
      default: break;
    }

  }

}
