import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageRoutingModule } from './storage-routing.module';

import { StorageComponent } from './storage.component';
import { OptionsComponent } from './options/options.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { RemoveComponent } from './remove/remove.component';

import { DownloadService } from './download/download.service';
import { UploadService } from './upload/upload.service';
import { RemoveService } from './remove/remove.service';


@NgModule({
  imports: [
    CommonModule,
    StorageRoutingModule
  ],
  declarations: [
    StorageComponent,
    OptionsComponent,
    UploadComponent,
    DownloadComponent,
    RemoveComponent
  ],
  providers: [
    DownloadService,
    UploadService,
    RemoveService
  ]
})
export class StorageModule { }
