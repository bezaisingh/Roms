import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "dashboard", loadChildren: "~/app/dashboard/dashboard.module#DashboardModule"},
    {
        path: "agencybizsize",
        loadChildren: "~/app/agencybizsize/agencybizsize.module#AgencybizsizeModule"
    },
    {
        path: "login",
        loadChildren: "~/app/login/login.module#LoginModule"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
 