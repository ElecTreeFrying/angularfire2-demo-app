import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealtimeDatabaseComponent } from './realtime-database.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path: '', component: RealtimeDatabaseComponent, children: [
    { path: '', component: CreateComponent },
    { path: 'create', component: CreateComponent },
    { path: 'read', component: ReadComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'delete', component: DeleteComponent },
    { path: 'query', component: QueryComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtimeDatabaseRoutingModule { }
