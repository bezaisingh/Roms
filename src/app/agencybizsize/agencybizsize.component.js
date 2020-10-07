"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var AgencybizsizeComponent = /** @class */ (function () {
    function AgencybizsizeComponent(page, routingExtensions) {
        this.page = page;
        this.routingExtensions = routingExtensions;
    }
    AgencybizsizeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    AgencybizsizeComponent.prototype.back = function () {
        this.routingExtensions.backToPreviousPage();
    };
    AgencybizsizeComponent.prototype.showcalender = function () {
        this.routingExtensions.navigate(["agencybizsize"]);
    };
    AgencybizsizeComponent = __decorate([
        core_1.Component({
            selector: "ns-agencybizsize",
            templateUrl: "./agencybizsize.component.html",
            styleUrls: ["./agencybizsize.component.css"],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], AgencybizsizeComponent);
    return AgencybizsizeComponent;
}());
exports.AgencybizsizeComponent = AgencybizsizeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmN5Yml6c2l6ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2VuY3liaXpzaXplLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsc0RBQStEO0FBUS9EO0lBRUUsZ0NBQW9CLElBQVUsRUFBVSxpQkFBbUM7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBSSxDQUFDO0lBRWhGLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELHFDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFkVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FHMEIsV0FBSSxFQUE2Qix5QkFBZ0I7T0FGaEUsc0JBQXNCLENBZ0JsQztJQUFELDZCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFnZW5jeWJpenNpemVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9hZ2VuY3liaXpzaXplLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hZ2VuY3liaXpzaXplLmNvbXBvbmVudC5jc3NcIl0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEFnZW5jeWJpenNpemVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0aW5nRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBiYWNrKCkge1xuICAgIHRoaXMucm91dGluZ0V4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBzaG93Y2FsZW5kZXIoKSB7XG4gICAgdGhpcy5yb3V0aW5nRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhZ2VuY3liaXpzaXplXCJdKTtcbiAgfVxuICBcbn1cbiJdfQ==