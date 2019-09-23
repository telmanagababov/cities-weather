import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather.component';
import { SharedModule } from '../shared/shared.module';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';

@NgModule({
  declarations: [WeatherComponent, CityWeatherComponent],
  exports: [WeatherComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class WeatherModule { }
