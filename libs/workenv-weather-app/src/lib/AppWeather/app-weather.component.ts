import {Component, OnInit} from '@angular/core';
import {WeatherModel, WeatherService} from "@nx-aio/shared-weather-app";

@Component({
  selector: 'nx-aio-app-weather',
  templateUrl: './app-weather.component.html',
  styleUrls: ['./app-weather.component.scss'],
})
export class AppWeatherComponent implements OnInit{
  constructor(private weatherService: WeatherService) {
  }

  cityName = 'Tirana'
  weatherData?: WeatherModel

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  private getWeatherData(cityName: string):void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response:WeatherModel):void => {
        this.weatherData = response
        console.log(response);
      }
    })
  }
}
