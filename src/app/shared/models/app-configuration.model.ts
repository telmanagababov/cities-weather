import { InjectionToken } from '@angular/core';
import { CityInfo } from './city-info.model';
import { CommunicationConfig } from './communication-config.model';

export interface AppConfiguration {
  cities: CityInfo[];
  communication: CommunicationConfig;
}

export const APP_CONFIGURATION = new InjectionToken<AppConfiguration>(
  'APP_CONFIGURATION'
);
