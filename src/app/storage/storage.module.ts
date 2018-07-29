import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageRoutingModule } from './storage-routing.module';
import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

import { StorageComponent } from './component/storage.component';
import { DownloadFileComponent } from './component/download-file/download-file.component';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { DeleteFileComponent } from './component/delete-file/delete-file.component';

import { StorageService } from './storage.service';

@NgModule({
  imports: [
    CommonModule,
    StorageRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    StorageComponent,
    DownloadFileComponent,
    UploadFileComponent,
    DeleteFileComponent
  ],
  providers: [
    StorageService
  ]
})
export class StorageModule { }
