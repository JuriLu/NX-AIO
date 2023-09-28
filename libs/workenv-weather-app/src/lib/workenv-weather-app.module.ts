import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { workenvWeatherAppRoutes } from './lib.routes';
import {NxWelcomeComponent} from "./nx-welcome.component";

@NgModule({
  declarations:[
    NxWelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(workenvWeatherAppRoutes),
    RouterModule,
  ],
})
export class WorkenvWeatherAppModule {}
