import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgShadowModule } from 'nativescript-ng-shadow';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    NativeScriptCommonModule,
    DashboardRoutingModule,
    NgShadowModule,
    NativeScriptHttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
