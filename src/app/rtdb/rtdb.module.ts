import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtdbRoutingModule } from './rtdb-routing.module';
import {
  MatCardModule
} from '@angular/material';

import { RtdbComponent } from './component/rtdb.component';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';

import { RtdbService } from './rtdb.service';

@NgModule({
  imports: [
    CommonModule,
    RtdbRoutingModule,
    MatCardModule
  ],
  declarations: [
    RtdbComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  providers: [
    RtdbService
  ]
})
export class RtdbModule { }
