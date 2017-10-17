import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { QueryService } from './query.service';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  personOrderByForm: FormGroup;

  people: Observable<any> | AngularFireObject<any> | AngularFireList<any>;

  constructor(private queryService: QueryService) { }

  ngOnInit() {
    this.people = this.queryService.getListPeople;

    this.personOrderByForm = new FormGroup({
      'child': new FormControl(null),
      'equal': new FormControl(null),
      'limit': new FormControl(null)
    });
  }


  // SORT

  queryOrderByKey(): void {
    this.people = this.queryService.queryOrderByKey;
  }

  queryOrderByValue(): void {
    this.people = this.queryService.queryOrderByValue;
  }

  queryOrderByChild(): void {
    const child = this.personOrderByForm.value.child;
    this.people = this.queryService.queryOrderByChild(child);
  }


  // FILTER

  queryEqualTo(): void {
    const child = this.personOrderByForm.value.child;
    const equal = this.personOrderByForm.value.equal;
    this.people = this.queryService.queryEqualTo(child, equal);
  }

  queryStartAt(): void {
    const child = this.personOrderByForm.value.child;
    const limit = this.personOrderByForm.value.limit;
    this.people = this.queryService.queryStartAt(child, limit);
  }

  queryEndAt(): void {
    const child = this.personOrderByForm.value.child;
    const limit = this.personOrderByForm.value.limit;
    this.people = this.queryService.queryEndAt(child, limit);
  }

  queryLimitToFirst(): void {
    const child = this.personOrderByForm.value.child;
    const limit = this.personOrderByForm.value.limit;
    this.people = this.queryService.queryLimitToFirst(child, limit);
  }

  queryLimitToLast(): void {
    const child = this.personOrderByForm.value.child;
    const limit = this.personOrderByForm.value.limit;
    this.people = this.queryService.queryLimitToLast(child, limit);
  }

}
