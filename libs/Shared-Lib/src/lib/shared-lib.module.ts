import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {WeatherService} from "./services/WeatherAppServices/weather.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[WeatherService],
  exports:[]
})
export class SharedLibModule {

}
