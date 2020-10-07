"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var httpService_1 = require(".././httpService");
var moment = require("moment");
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(page, routerExtansions, router, route, myService) {
        this.page = page;
        this.routerExtansions = routerExtansions;
        this.router = router;
        this.route = route;
        this.myService = myService;
        this.myLoader = false;
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        var name = this.route.snapshot.params['AG_NAME'];
        var date1 = moment(this.route.snapshot.params['date1']).format("YYYY-MM-DD");
        var date2 = moment(this.route.snapshot.params['date2']).format("YYYY-MM-DD");
        this.myLoader = true;
        var formData = new FormData();
        formData.append('AG_NAME', name);
        formData.append('date1', date1);
        formData.append('date2', date2);
        console.log(date1);
        console.log(date2);
        this.myService.post('tabdata.php', formData).subscribe(function (result) {
            console.log("Details", result);
            _this.myLoader = false;
            _this.datas = result['list'][0];
            console.log(_this.datas);
        }, function (error) {
            console.log(error);
        });
    };
    FeaturedComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    FeaturedComponent.prototype.back = function () {
        this.routerExtansions.backToPreviousPage();
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: "Featured",
            moduleId: module.id,
            templateUrl: "./featured.component.html",
            styleUrls: ["./featured.component.css"],
            providers: [httpService_1.MyHttpService]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            router_2.Router,
            router_2.ActivatedRoute,
            httpService_1.MyHttpService])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUNwRCxzREFBcUQ7QUFDckQsc0RBQStEO0FBQy9ELDBDQUF5RDtBQUN6RCxnREFBaUQ7QUFDakQsK0JBQWlDO0FBU2pDO0lBS0ksMkJBQ1ksSUFBVSxFQUNWLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ2QsS0FBb0IsRUFDcEIsU0FBd0I7UUFKeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQVA1QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBVXpCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1RSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQS9DUSxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJCQUFhLENBQUM7U0FDN0IsQ0FBQzt5Q0FPb0IsV0FBSTtZQUNRLHlCQUFnQjtZQUMxQixlQUFNO1lBQ1IsdUJBQWM7WUFDVCwyQkFBYTtPQVYzQixpQkFBaUIsQ0FnRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTXlIdHRwU2VydmljZSB9IGZyb20gXCIuLi8uL2h0dHBTZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJGZWF0dXJlZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mZWF0dXJlZC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9mZWF0dXJlZC5jb21wb25lbnQuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW015SHR0cFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgZGF0YXM6IGFueTtcbiAgICBwcml2YXRlIG15TG9hZGVyID0gZmFsc2U7IFxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0YW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cFNlcnZpY2UsXG4gICAgICAgICkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydBR19OQU1FJ107IFxuICAgICAgICB2YXIgZGF0ZTEgPSBtb21lbnQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2RhdGUxJ10pLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICAgdmFyIGRhdGUyID0gbW9tZW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydkYXRlMiddKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpICBcbiAgICAgICAgdGhpcy5teUxvYWRlciA9IHRydWU7ICBcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnQUdfTkFNRScsIG5hbWUpOyBcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkYXRlMScsIGRhdGUxKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkYXRlMicsIGRhdGUyKTsgICAgXG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0ZTEpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRlMik7XG5cbiAgICAgICAgdGhpcy5teVNlcnZpY2UucG9zdCgndGFiZGF0YS5waHAnLCBmb3JtRGF0YSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV0YWlsc1wiLCByZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy5teUxvYWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHJlc3VsdFsnbGlzdCddWzBdO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0YW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG59XG4iXX0=