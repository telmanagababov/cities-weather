import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppConfiguration, APP_CONFIGURATION } from './models/app-configuration.model';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CityPreviewComponent } from './components/city-preview/city-preview.component';

@NgModule({
  declarations: [NavigationComponent, CreditsComponent, CityPreviewComponent],
  exports: [NavigationComponent, CreditsComponent, CityPreviewComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {
  static forRoot(config: AppConfiguration): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: APP_CONFIGURATION, useValue: config },
      ]
    };
  }
}
