import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { workenvPdfAppRoutes } from './lib.routes';
import { PDFAppComponent } from './pdf-app/pdf-app.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workenvPdfAppRoutes),
    RouterModule,
  ],
  declarations: [
    PDFAppComponent
  ],
})
export class WorkenvPdfAppModule {}
