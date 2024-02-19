import { Route } from '@angular/router';
import { NxWelcomeComponent } from './Nx-Welcome/nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'weather-app',
    loadChildren: () =>
      import('@NxAIO/Workenv-WeatherApp').then((m) => m.WorkenvWeatherAppModule),
  },
  {
    path: 'travel-app',
    loadChildren: () =>
      import('@NxAIO/Workenv-TravelApp').then((m) => m.WorkenvTravelAppModule),
  },
  {
    path: 'pdf-app',
    loadChildren: () =>
      import('@NxAIO/Workenv-PdfApp').then((m) => m.WorkenvPdfAppModule),
  }
];
