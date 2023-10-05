import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { workenvAccountAppRoutes } from './lib.routes';
import {TravelAgencyComponent} from "./TravelAgency/travel-agency.component";
import {SharedLibModule} from "@NxAIO/Shared-Lib";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workenvAccountAppRoutes),
    RouterModule,
    SharedLibModule,
    CommonModule,
  ],
  declarations: [TravelAgencyComponent],
})
export class WorkenvAccountAppModule {}
