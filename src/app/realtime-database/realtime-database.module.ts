import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RealtimeDatabaseRoutingModule } from './realtime-database-routing.module';

import { RealtimeDatabaseComponent } from './realtime-database.component';
import { OptionsComponent } from './options/options.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { QueryComponent } from './query/query.component';

import { CreateService } from './create/create.service';
import { ReadService } from './read/read.service';
import { UpdateService } from './update/update.service';
import { DeleteService } from './delete/delete.service';
import { QueryService } from './query/query.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RealtimeDatabaseRoutingModule
  ],
  declarations: [
    RealtimeDatabaseComponent,
    OptionsComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    QueryComponent
  ],
  providers: [
    CreateService,
    ReadService,
    UpdateService,
    DeleteService,
    QueryService
  ]
})
export class RealtimeDatabaseModule { }
