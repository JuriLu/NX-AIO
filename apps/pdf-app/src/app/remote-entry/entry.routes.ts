import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '',
  loadChildren:()=> import('@NxAIO/Workenv-PdfApp').then((m)=>m.WorkenvPdfAppModule)
  },
];
