import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from './weather-api.model';
import { WeatherApiRequests } from './weather-api-requests.config';
import { APP_CONFIGURATION, AppConfiguration } from '../../shared/models/app-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIGURATION) private appConfiguration: AppConfiguration
  ) { }

  getWeather$(cityQuery: string): Observable<API.Weather> {
    const { gateway, apiKey } = this.appConfiguration.communication;
    const api = WeatherApiRequests.GetWeather;
    const request = `${gateway}/${api}?APPID=${apiKey}&q=${cityQuery}&units=metric`;

    return this.httpClient.get<API.Weather>(request);
  }
}
