import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {remoteRoutes} from './entry.routes';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(remoteRoutes)
    ],
    providers: [],
})
export class RemoteEntryModule {
}
