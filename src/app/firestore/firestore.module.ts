import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestoreRoutingModule } from './firestore-routing.module';
import {
  MAT_CHECKBOX_CLICK_ACTION,
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule
} from '@angular/material';

import { FirestoreComponent } from './component/firestore.component';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';

import { CreateService } from './component/create/create.service';
import { ReadService } from './component/read/read.service';
import { UpdateService } from './component/update/update.service';
import { DeleteService } from './component/delete/delete.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FirestoreRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  declarations: [
    FirestoreComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' },
    CreateService,
    ReadService,
    UpdateService,
    DeleteService
  ]
})
export class FirestoreModule { }
