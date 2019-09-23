import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'ctw-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {
  @Input() time: string;
  @Input() weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
