import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AgencybizsizeComponent } from "./agencybizsize.component";
import { AgencybizsizeRoutingModule } from "./agencybizsize-routing.module";

@NgModule({
  declarations: [AgencybizsizeComponent],
  imports: [
    NativeScriptCommonModule,
    AgencybizsizeRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AgencybizsizeModule { }
