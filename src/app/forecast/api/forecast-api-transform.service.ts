import { Injectable } from '@angular/core';
import { API } from './forecast-api.model';
import { Forecast } from '../models/forecast.model';
import { Weather } from '../../shared/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastApiTransformService {

  constructor() { }

  forecastResponseToForecast$(response: API.Forecast): Forecast {
    const currentDate = new Date().getDate();
    const todayItems = response.list.filter(item => {
      return new Date(item.dt_txt).getDate() === currentDate;
    }).map(item => ({
      time: this.getTime(item.dt_txt),
      weather: new Weather(
        `${item.main.temp_min} - ${item.main.temp_max}`,
        item.weather[0].main,
        { wind: item.wind.speed }
      )
    }));

    return new Forecast(todayItems);
  }

  private getTime(date: string): string {
    return new Date(date).toLocaleString('en-US', { hour: 'numeric' });
  }
}
