import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirestoreRoutingModule } from './firestore-routing.module';
import { FirestoreComponent } from './firestore.component';

@NgModule({
  imports: [
    CommonModule,
    FirestoreRoutingModule
  ],
  declarations: [FirestoreComponent]
})
export class FirestoreModule { }
