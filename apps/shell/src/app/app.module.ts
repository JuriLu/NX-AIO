import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {NgOptimizedImage} from "@angular/common";
import {NxWelcomeComponent} from "./Nx-Welcome/nx-welcome.component";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
        NgOptimizedImage,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
