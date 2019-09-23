import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CityInfo } from '../../../shared/models/city-info.model';
import { ForecastService } from '../../services/forecast.service';
import { Forecast } from '../../models/forecast.model';

@Component({
  selector: 'ctw-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {
  @Input() city: CityInfo;

  forecast$: Observable<Forecast>;

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.forecast$ = this.forecastService.getForecast$(this.city.query);
  }
}
