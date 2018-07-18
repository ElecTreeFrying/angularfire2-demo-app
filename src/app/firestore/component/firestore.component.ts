import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {

  isRouted: boolean = false;
  card: string[] = [ 'Create', 'Read', 'Update', 'Delete' ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isRouted = this.router.url === '/firestore' ? false : true

    this.router.events.pipe(
      filter((e: any) => e instanceof NavigationStart),
      map((e: any) => e.url)
    ).subscribe((url) => {
      this.isRouted = url === '/firestore' ? false : true;
    });
  }

  navigate(name: string) {
    const route = name.toLowerCase().split(' ').map((e) => e.split('')[0].toLowerCase() + e.split('').splice(1).join('')).join('-');
    this.router.navigate([route], { relativeTo: this.route })
  }

}
