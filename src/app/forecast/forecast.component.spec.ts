import { Router, ActivatedRoute } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
import { ForecastComponent } from './forecast.component';
import { AppConfiguration } from '../shared/models/app-configuration.model';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let appConfiguration: AppConfiguration;

  beforeEach(initMocks);

  it('should set city on init', () => {
    // Given
    activatedRoute.params = of({ city: 'London' });
    appConfiguration.cities = [{ title: 'London', preview: 'london', query: 'london' }];
    // When
    component.ngOnInit();
    // Then
    expect(component.city).toBe(appConfiguration.cities[0]);
  });

  it('should navigate if no such city in configuration', () => {
    // Given
    activatedRoute.params = of({ city: 'London' });
    appConfiguration.cities = [];
    // When
    component.ngOnInit();
    // Then
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should unsubscribe from params after destroy', () => {
    // Given
    activatedRoute.params = new BehaviorSubject({ city: 'London' });
    appConfiguration.cities = [];
    component.ngOnInit();
    (router.navigate as any).calls.reset();
    // When
    component.ngOnDestroy();
    (activatedRoute.params as BehaviorSubject<any>).next(null);
    // Then
    expect(router.navigate).not.toHaveBeenCalled();
  });

  function initMocks() {
    router = jasmine.createSpyObj(['navigate']);
    activatedRoute = jasmine.createSpyObj(['']);
    appConfiguration = jasmine.createSpyObj(['']);
    appConfiguration.communication = { gateway: 'gateway', apiKey: 'apiKey', updateTimeout: 0 };
    component = new ForecastComponent(router, activatedRoute, appConfiguration);
  }
});
