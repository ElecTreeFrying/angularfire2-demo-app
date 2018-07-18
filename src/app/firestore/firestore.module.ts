import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreRoutingModule } from './firestore-routing.module';
import {
  MatCardModule
} from '@angular/material';

import { FirestoreComponent } from './component/firestore.component';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';

import { FirestoreService } from './firestore.service';

@NgModule({
  imports: [
    CommonModule,
    FirestoreRoutingModule,
    MatCardModule
  ],
  declarations: [
    FirestoreComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  providers: [
    FirestoreService
  ]
})
export class FirestoreModule { }
