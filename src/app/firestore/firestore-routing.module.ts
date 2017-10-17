import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirestoreComponent } from './firestore.component';

const routes: Routes = [
  { path: '', component: FirestoreComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirestoreRoutingModule { }
