import { WeatherDetails } from './weather-details.model';

export class Weather {
  constructor(
    public weather: string,
    public description?: string,
    public details?: WeatherDetails
  ) {}
}
