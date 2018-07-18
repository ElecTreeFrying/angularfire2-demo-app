import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtdbComponent } from './component/rtdb.component';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';

const routes: Routes = [
  { path: '', component: RtdbComponent, children: [
    { path: 'create', component: CreateComponent },
    { path: 'read', component: ReadComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'delete', component: DeleteComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtdbRoutingModule { }
