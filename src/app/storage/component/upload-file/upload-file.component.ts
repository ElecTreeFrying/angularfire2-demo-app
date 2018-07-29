import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  file: File;

  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  onChange(event: Event) {
    this.file = event.target['files'][0];
  }

  upload() {
    this.storage.uploadFile(this.file);
  }

}
