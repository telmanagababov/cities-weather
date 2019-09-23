import { Injectable, Inject } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import { ForecastApiTransformService } from '../api/forecast-api-transform.service';
import { ForecastApiService } from '../api/forecast-api.service';
import { APP_CONFIGURATION, AppConfiguration } from '../../shared/models/app-configuration.model';
import { Forecast } from '../models/forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(
    private api: ForecastApiService,
    private transform: ForecastApiTransformService,
    @Inject(APP_CONFIGURATION) private appConfiguration: AppConfiguration
  ) { }

  getForecast$(cityQuery: string): Observable<Forecast> {
    const communicationOptions = this.appConfiguration.communication;

    return interval(communicationOptions.updateTimeout).pipe(
      startWith(null),
      switchMap(() => this.api.getForecast$(cityQuery).pipe(
        map(response => this.transform.forecastResponseToForecast$(response))
      ))
    );
  }
}
