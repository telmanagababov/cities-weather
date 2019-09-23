import { Weather } from '../../shared/models/weather.model';

export class Forecast {
  constructor(public items: { time: string, weather: Weather }[]) {}
}
