import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { workenvWeatherAppRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workenvWeatherAppRoutes),
    RouterModule,
  ],
})
export class WorkenvWeatherAppModule {}
