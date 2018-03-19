import { Component, OnInit } from '@angular/core';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { DeleteService } from './delete.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  people: Observable<any> | AngularFireObject<any> | AngularFireList<any>;
  list: boolean = true;

  constructor(private deleteService: DeleteService) { }

  ngOnInit() {
  }


  // OBJECT

  deleteObject(): void {
    this.deleteService.deleteObject();
  }


  // LIST

  deleteList(): void {
    this.deleteService.deleteList();
  }

  deleteListByKey(key: string): void {
    this.deleteService.deleteListByKey = key;
  }


  // HELPER

  listObjectOption(option: boolean): void {
    this.list = option;

    this.people =
      option === false
        ? this.deleteService.getListPeople
        : this.deleteService.getObjectPeople;
  }

}
