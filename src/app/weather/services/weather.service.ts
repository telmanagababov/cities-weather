import { Injectable, Inject } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import { WeatherApiTransformService } from '../api/weather-api-transform.service';
import { WeatherApiService } from '../api/weather-api.service';
import { Weather } from '../../shared/models/weather.model';
import { APP_CONFIGURATION, AppConfiguration } from '../../shared/models/app-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private api: WeatherApiService,
    private transform: WeatherApiTransformService,
    @Inject(APP_CONFIGURATION) private appConfiguration: AppConfiguration
  ) { }

  getWeather$(cityQuery: string): Observable<Weather> {
    const communicationOptions = this.appConfiguration.communication;

    return interval(communicationOptions.updateTimeout).pipe(
      startWith(null),
      switchMap(() => this.api.getWeather$(cityQuery).pipe(
        map(response => this.transform.weatherResponseToWeather$(response))
      ))
    );
  }
}
