import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RtdbRoutingModule } from './rtdb-routing.module';
import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { RtdbComponent } from './component/rtdb.component';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';

import { CreateService } from './component/create/create.service';
import { ReadService } from './component/read/read.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RtdbRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    RtdbComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  providers: [
    CreateService,
    ReadService
  ]
})
export class RtdbModule { }
