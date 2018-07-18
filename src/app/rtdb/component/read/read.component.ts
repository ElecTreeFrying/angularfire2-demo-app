import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ReadService } from './read.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  object: Observable<any>;
  list: Observable<any>;

  constructor(
    private read: ReadService
  ) { }

  ngOnInit() {
    this.object = this.read.objectValueChanges;
    this.list = this.read.listValueChanges;
  }

  objectValueChanges() {
    this.object = this.read.objectValueChanges;
  }

  objectSnapshotChanges() {
    this.object = this.read.objectSnapshotChanges;
  }

  listValueChanges() {
    this.list = this.read.listValueChanges;
  }

  listSnapshotChanges() {
    this.list = this.read.listSnapshotChanges;
  }


}
