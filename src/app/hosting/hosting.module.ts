import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostingRoutingModule } from './hosting-routing.module';
import {
  MatCardModule
} from '@angular/material';

import { HostingComponent } from './component/hosting.component';
import { CliComponent } from './component/cli/cli.component';
import { BuildComponent } from './component/build/build.component';
import { DeployComponent } from './component/deploy/deploy.component';
import { MonitorComponent } from './component/monitor/monitor.component';

import { HostingService } from './hosting.service';

@NgModule({
  imports: [
    CommonModule,
    HostingRoutingModule,
    MatCardModule
  ],
  declarations: [
    HostingComponent,
    CliComponent,
    BuildComponent,
    DeployComponent,
    MonitorComponent
  ],
  providers: [
    HostingService
  ]
})
export class HostingModule { }
