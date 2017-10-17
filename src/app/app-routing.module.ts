import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostingComponent } from './hosting/hosting.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule' },
  { path: 'rtdb', loadChildren: './realtime-database/realtime-database.module#RealtimeDatabaseModule' },
  { path: 'firestore', loadChildren: './firestore/firestore.module#FirestoreModule' },
  { path: 'storage', loadChildren: './storage/storage.module#StorageModule' },
  { path: 'hosting', component: HostingComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
