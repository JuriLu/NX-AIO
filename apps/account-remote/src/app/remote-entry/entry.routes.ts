import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren:()=> import('@nx-aio/workenv-account-app').then((m)=>m.WorkenvAccountAppModule)
  },
];
