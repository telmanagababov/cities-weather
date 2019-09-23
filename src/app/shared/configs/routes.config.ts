import { NavigationRoute } from '../models/navigation-route.model';

export const routes = {
  WEATHER: new NavigationRoute('Weather', '/weather'),
  FORECAST: new NavigationRoute('Forecast', '/forecast')
};
