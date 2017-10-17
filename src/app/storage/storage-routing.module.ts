import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorageComponent } from './storage.component';

const routes: Routes = [
  { path: '', component: StorageComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
