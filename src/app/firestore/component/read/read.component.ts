import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ReadService } from './read.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  list: Observable<any[]>;

  constructor(
    private read: ReadService
  ) { }

  ngOnInit() {
    this.list = this.read.docValueChanges;
  }

  valueChanges() {
    this.list = this.read.docValueChanges;
  }

  snapshotChanges() {
    this.list = this.read.docSnapshotChanges;
  }


}
