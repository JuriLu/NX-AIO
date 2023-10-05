import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren:()=> import('@NxAIO/Workenv-AccountApp').then((m)=>m.WorkenvAccountAppModule)
  },
];
