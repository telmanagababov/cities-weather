import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from './forecast-api.model';
import { ForecastApiRequests } from './forecast-api-requests.config';
import { APP_CONFIGURATION, AppConfiguration } from '../../shared/models/app-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastApiService {

  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIGURATION) private appConfiguration: AppConfiguration
  ) { }

  getForecast$(cityQuery: string): Observable<API.Forecast> {
    const { gateway, apiKey } = this.appConfiguration.communication;
    const api = ForecastApiRequests.GetForecast;
    const request = `${gateway}/${api}?APPID=${apiKey}&q=${cityQuery}&units=metric`;

    return this.httpClient.get<API.Forecast>(request);
  }
}
