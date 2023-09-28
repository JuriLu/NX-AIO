import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '', component: RemoteEntryComponent ,
    loadChildren: () => import('@NxAIO/Workenv-WeatherApp').then((m) => m.WorkenvWeatherAppModule)
  },
];
