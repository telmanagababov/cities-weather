import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { SharedModule } from '../shared/shared.module';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';

@NgModule({
  declarations: [ForecastComponent, CityForecastComponent, ForecastItemComponent],
  exports: [ForecastComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ForecastModule { }
