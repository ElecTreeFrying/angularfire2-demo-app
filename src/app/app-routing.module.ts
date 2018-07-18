import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'firestore', loadChildren: './firestore/firestore.module#FirestoreModule' },
  { path: 'rtdb', loadChildren: './rtdb/rtdb.module#RtdbModule' },
  { path: 'storage', loadChildren: './storage/storage.module#StorageModule' },
  { path: 'hosting', loadChildren:'./hosting/hosting.module#HostingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
