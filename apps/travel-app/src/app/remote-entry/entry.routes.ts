import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren:()=> import('@NxAIO/Workenv-TravelApp').then((m)=>m.WorkenvTravelAppModule)
  },
];
