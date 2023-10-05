import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@NxAIO/Workenv-WeatherApp').then((m) => m.WorkenvWeatherAppModule)
  },
];
