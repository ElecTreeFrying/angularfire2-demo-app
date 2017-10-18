import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { RemoveService } from './remove.service';


@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  uploads: Observable<any> | AngularFireList<any>;

  constructor(private removeService: RemoveService) { }

  ngOnInit() {
    this.uploads = this.removeService.getListUploads;
  }

  onRemove(name: string, key: string): void {
    this.removeService.onRemove(name, key);
  }

}
