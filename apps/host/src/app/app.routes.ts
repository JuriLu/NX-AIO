import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'weather-app',
    loadChildren: () =>
      import('weather-app/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'account-remote',
    loadChildren: () =>
      import('account-remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
