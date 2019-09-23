import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'forecast/:city', component: ForecastComponent },
  { path: '**', redirectTo: 'weather' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
