import { Component, OnInit } from '@angular/core';

import { ReadService } from './read.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  list: boolean = true;

  constructor(private readService: ReadService) { }

  ngOnInit() {
  }


  // OBJECT

  readObjectWithValueChanges(): void {
    this.readService.getObjectPeopleValueChanges.subscribe((response: any) => {
      console.log('Object valueChanges', response);
    });
  }


  // LIST

  readlistWithValueChanges(): void {
    this.readService.getListPeopleValueChanges.subscribe((response: any) => {
      console.log('List valueChanges', response);
    });
  }

  readlistWithSnapshotChanges(): void {
    this.readService.getListPeopleSnapshotChanges.subscribe((response: any) => {
      console.log('List snapshotChanges', response);
    });
  }


  // HELPER

  listObjectOption(option: boolean): void {
    this.list = option;
  }

}
