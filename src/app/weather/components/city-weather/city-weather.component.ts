import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CityInfo } from '../../../shared/models/city-info.model';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../../shared/models/weather.model';

@Component({
  selector: 'ctw-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  @Input() city: CityInfo;

  weather$: Observable<Weather>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather$ = this.weatherService.getWeather$(this.city.query);
  }
}
