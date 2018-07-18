import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostingComponent } from './component/hosting.component';
import { CliComponent } from './component/cli/cli.component';
import { BuildComponent } from './component/build/build.component';
import { DeployComponent } from './component/deploy/deploy.component';
import { MonitorComponent } from './component/monitor/monitor.component';

const routes: Routes = [
  { path: '', component: HostingComponent, children: [
    { path: 'cli', component: CliComponent },
    { path: 'build', component: BuildComponent },
    { path: 'deploy', component: DeployComponent },
    { path: 'monitor', component: MonitorComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingRoutingModule { }
