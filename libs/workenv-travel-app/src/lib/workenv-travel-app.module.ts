import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { workenvTravelAppRoutes } from './lib.routes';
import {TravelAgencyComponent} from "./TravelAgency/travel-agency.component";
import {SharedLibModule} from "@NxAIO/Shared-Lib";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workenvTravelAppRoutes),
    RouterModule,
    SharedLibModule,
    CommonModule,
  ],
  declarations: [TravelAgencyComponent],
})
export class WorkenvTravelAppModule {}
