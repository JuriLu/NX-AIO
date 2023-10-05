import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { workenvWeatherAppRoutes } from './lib.routes';
import {AppWeatherComponent} from "./AppWeather/app-weather.component";
import {FormsModule} from "@angular/forms";
import {SharedLibModule} from "@NxAIO/Shared-Lib";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workenvWeatherAppRoutes),
    RouterModule,
    SharedLibModule,
    FormsModule
  ],
  declarations:[AppWeatherComponent]
})
export class WorkenvWeatherAppModule {}
