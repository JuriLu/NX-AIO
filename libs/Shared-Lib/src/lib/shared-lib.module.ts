import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherService} from "./services/weather.service";
import {HttpClientModule} from "@angular/common/http";

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
