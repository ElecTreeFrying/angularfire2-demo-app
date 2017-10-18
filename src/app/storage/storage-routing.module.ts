import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorageComponent } from './storage.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  { path: '', component: StorageComponent, children: [
    { path: '', component: UploadComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'download', component: DownloadComponent },
    { path: 'remove', component: RemoveComponent }
  ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
