import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

import {Observable} from "rxjs";
import {environment, WeatherModel} from "@nx-aio/shared-weather-app";


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeatherData(cityName: string):Observable<WeatherModel> {
    return this.http.get<WeatherModel>(`${environment.weatherApiBaseUrl}`,
      {
        headers: new HttpHeaders()
          .set(environment.X_RAPID_API_KEY_NAME, environment.X_RAPID_API_KEY_VALUE)
          .set(environment.X_RAPID_API_HOST_NAME, environment.X_RAPID_API_HOST_VALUE),

        params: new HttpParams()
          .set('q', cityName)
      }
    )
  }


}
