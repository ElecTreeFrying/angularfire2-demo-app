import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { DownloadService } from './download.service';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  uploads: Observable<any> | AngularFireList<any>;

  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
    this.uploads = this.downloadService.getListUploads;
  }

  onDownload(url: string): void {
    this.downloadService.onDownload = url;
  }

}
