import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIGURATION, AppConfiguration } from '../shared/models/app-configuration.model';
import { CityInfo } from '../shared/models/city-info.model';
import { routes } from '../shared/configs/routes.config';

@Component({
  selector: 'ctw-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cities: CityInfo[];

  constructor(
    private router: Router,
    @Inject(APP_CONFIGURATION) private appConfiguration: AppConfiguration
  ) { }

  ngOnInit() {
    this.cities = this.appConfiguration.cities;
  }

  showForecast(city: CityInfo): void {
    this.router.navigate([routes.FORECAST.link, city.title]);
  }
}
