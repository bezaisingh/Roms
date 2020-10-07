import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AgencybizsizeComponent } from "./agencybizsize.component";

const routes: Routes = [
    { path: "", component: AgencybizsizeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AgencybizsizeRoutingModule { }
