import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { workenvWeatherAppRoutes } from './lib.routes';
import {SharedWeatherAppModule} from "@nx-aio/shared-weather-app";
import {AppWeatherComponent} from "./AppWeather/app-weather.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workenvWeatherAppRoutes),
    RouterModule,
    SharedWeatherAppModule,
    FormsModule
  ],
  declarations:[AppWeatherComponent]
})
export class WorkenvWeatherAppModule {}
