import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isRouted: boolean = false;
  height: string = '40px';
  panel = [
    {
      header: 'Authentication',
      list: [ 'Email and Password', 'Anonymously', 'Social media', 'Sign out', 'Update Email', 'Update Password', 'Update Profile' ],
      navigation: '/auth',
    },
    {
      header: 'Realtime Database',
      list: [ 'Create', 'Read', 'Update', 'Delete' ],
      navigation: '/rtdb'
    },
    {
      header: 'Cloud Firestore',
      list: [ 'Create', 'Read', 'Update', 'Delete' ],
      navigation: '/firestore'
    },
    {
      header: 'Firebase Storage',
      list: [ 'Upload File', 'Download File', 'Delete File' ],
      navigation: '/storage'
    }
  ]

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((e: any) => e instanceof NavigationStart),
      map((e: any) => e.url)
    ).subscribe((url) => {
      this.isRouted = url.length > 1;
      this.isRouted
        ? this.panel.length === 4 ? this.panel.splice(0, 0, { header: 'Home', list: [], navigation: '/' }) : 0
        : this.panel.length === 5 ? this.panel.splice(0, 1) : 0;
    });
  }

  navigate(active: string, link: string) {
    const route = `${active}/${link.toLowerCase().split(' ').map((e) => e.split('')[0].toLowerCase() + e.split('').splice(1).join('')).join('-')}`;
    setTimeout(() => { this.router.navigate([`${route}`]) });
  }

}
