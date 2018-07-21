import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isRouted: boolean = false;
  card: string[] = [ 'Email and Password', 'Anonymously', 'Social Media', 'Sign out', 'Update Email', 'Update Password', 'Update Profile' ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isRouted = this.router.url === '/auth' ? false : true

    this.router.events.pipe(
      filter((e: any) => e instanceof NavigationStart),
      map((e: any) => e.url)
    ).subscribe((url) => {
      this.isRouted = url === '/auth' ? false : true;
    });
  }

  navigate(name: string) {
    const route = name.toLowerCase().split(' ').map((e) => e.split('')[0].toLowerCase() + e.split('').splice(1).join('')).join('-');
    this.router.navigate([route], { relativeTo: this.route })
  }

}
