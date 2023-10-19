import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Route } from '@angular/router';
import { workenvPdfAppRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workenvPdfAppRoutes),
    RouterModule,
  ],
})
export class WorkenvPdfAppModule {}
