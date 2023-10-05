import { Route } from '@angular/router';
import {NxWelcomeComponent} from "./Nx-Welcome/nx-welcome.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
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

];
