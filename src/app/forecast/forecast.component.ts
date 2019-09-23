import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CityInfo } from '../shared/models/city-info.model';
import { APP_CONFIGURATION, AppConfiguration } from '../shared/models/app-configuration.model';
import { routes } from '../shared/configs/routes.config';

@Component({
  selector: 'ctw-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {
  readonly routes = routes;

  city: CityInfo;

  private routeSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(APP_CONFIGURATION) private appConfiguration: AppConfiguration
  ) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.city = this.getCityByTitle(params.city);

      if (!this.city) {
        this.router.navigate([this.routes.WEATHER.link]);
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  private getCityByTitle(title: string): CityInfo {
    return this.appConfiguration.cities.find(city => {
      return city.title === title;
    });
  }
}
