import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorageComponent } from './component/storage.component';
import { DownloadFileComponent } from './component/download-file/download-file.component';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { DeleteFileComponent } from './component/delete-file/delete-file.component';

const routes: Routes = [
  { path: '', component: StorageComponent, children: [
    { path: 'download-file', component: DownloadFileComponent },
    { path: 'upload-file', component: UploadFileComponent },
    { path: 'delete-file', component: DeleteFileComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
