import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import * as _ from 'lodash';

import { UploadService } from './upload.service';

import { Upload } from './upload';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploads: Observable<any> | AngularFireList<any>;
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.uploads = this.uploadService.getListUploads;
  }

  onDetectFiles(event): void {
    this.selectedFiles = event.target.files;
  }

  onUpload(): void {
    let files = this.selectedFiles;

    if (_.isEmpty(files)) return;

    let filesIndex = _.range(files.length);

    _.each(filesIndex, (index) => {
      this.currentUpload = new Upload(files[index]);
      this.uploadService.pushUpload = this.currentUpload;
    });
  }

}
