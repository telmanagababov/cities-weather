import { Injectable } from '@angular/core';
import { API } from './weather-api.model';
import { Weather } from '../../shared/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiTransformService {

  constructor() { }

  weatherResponseToWeather$(response: API.Weather): Weather {
    return new Weather(
      `${response.main.temp_min} - ${response.main.temp_max}`,
      response.weather[0].main,
      {
        pressure: response.main.pressure,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        clouds: response.clouds.all,
      }
    );
  }
}
