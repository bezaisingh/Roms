"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var httpService_1 = require(".././httpService");
var router_2 = require("@angular/router");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(page, routerExtensions, myService, router) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.myService = myService;
        this.router = router;
        this.tender = {};
        this.notice = {};
        this.display = {};
        this.myLoader = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.tenderHttp();
        this.noticeHttp();
        this.displayHttp();
    };
    DashboardComponent.prototype.tenderHttp = function () {
        var _this = this;
        this.myLoader = true;
        this.myService.getData('tender-dashboard.php')
            .subscribe(function (result) {
            _this.myLoader = false;
            _this.tender = result;
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.noticeHttp = function () {
        var _this = this;
        this.myService.getData('notice-dashboard.php')
            .subscribe(function (result) {
            _this.notice = result;
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.displayHttp = function () {
        var _this = this;
        this.myService.getData('display-dashboard.php')
            .subscribe(function (result) {
            _this.display = result;
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.detail = function () {
        this.routerExtensions.navigate(["agencybizsize"]);
    };
    DashboardComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    DashboardComponent.prototype.clikNavigate = function () {
        this.router.navigate(["home", { date: this.tender['curr_month'] }]);
    };
    DashboardComponent.prototype.moreBtn = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "ns-dashboard",
            templateUrl: "./dashboard.component.html",
            styleUrls: ["./dashboard.component.css"],
            moduleId: module.id,
            providers: [httpService_1.MyHttpService]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            httpService_1.MyHttpService,
            router_2.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUUvRCxrREFBb0Q7QUFDcEQsZ0RBQWlEO0FBQ2pELDBDQUF5QztBQVl6QztJQUVFLDRCQUNVLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsU0FBd0IsRUFDeEIsTUFBYztRQUhkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUloQixXQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ1gsV0FBTSxHQUFHLEVBQUUsQ0FBQTtRQUNYLFlBQU8sR0FBRyxFQUFFLENBQUE7UUFDWixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBTm5CLENBQUM7SUFTUCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFHRCx1Q0FBVSxHQUFWO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQzthQUM3QyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELHVDQUFVLEdBQVY7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDO2FBQzdDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDaEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUM7YUFDOUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNoQixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsb0NBQU8sR0FBUDtJQUVBLENBQUM7SUF0RVUsa0JBQWtCO1FBVjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQywyQkFBYSxDQUFDO1NBQzNCLENBQUM7eUNBT2dCLFdBQUk7WUFDUSx5QkFBZ0I7WUFDdkIsMkJBQWE7WUFDaEIsZUFBTTtPQU5iLGtCQUFrQixDQTBFOUI7SUFBRCx5QkFBQztDQUFBLEFBMUVELElBMEVDO0FBMUVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE15SHR0cFNlcnZpY2UgfSBmcm9tIFwiLi4vLi9odHRwU2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtZGFzaGJvYXJkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzc1wiXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgcHJvdmlkZXJzOiBbTXlIdHRwU2VydmljZV1cbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHsgfVxuXG5cbiAgcHJpdmF0ZSB0ZW5kZXIgPSB7fVxuICBwcml2YXRlIG5vdGljZSA9IHt9XG4gIHByaXZhdGUgZGlzcGxheSA9IHt9XG4gIHByaXZhdGUgbXlMb2FkZXIgPSBmYWxzZTtcblxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy50ZW5kZXJIdHRwKClcbiAgICB0aGlzLm5vdGljZUh0dHAoKVxuICAgIHRoaXMuZGlzcGxheUh0dHAoKVxuICB9XG5cblxuICB0ZW5kZXJIdHRwKCkge1xuICAgIHRoaXMubXlMb2FkZXIgPSB0cnVlXG4gICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YSgndGVuZGVyLWRhc2hib2FyZC5waHAnKVxuICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5teUxvYWRlciA9IGZhbHNlXG4gICAgICB0aGlzLnRlbmRlciA9IHJlc3VsdDsgXG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuXG4gIG5vdGljZUh0dHAoKSB7XG4gICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YSgnbm90aWNlLWRhc2hib2FyZC5waHAnKVxuICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5ub3RpY2UgPSByZXN1bHQ7IFxuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzcGxheUh0dHAoKSB7XG4gICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YSgnZGlzcGxheS1kYXNoYm9hcmQucGhwJylcbiAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuZGlzcGxheSA9IHJlc3VsdDsgXG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuXG4gIGRldGFpbCgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYWdlbmN5Yml6c2l6ZVwiXSk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICBjbGlrTmF2aWdhdGUoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCIse2RhdGU6dGhpcy50ZW5kZXJbJ2N1cnJfbW9udGgnXX1dKTtcbiAgfVxuXG4gIG1vcmVCdG4oKSB7XG4gICAgXG4gIH1cblxuICBcblxufVxuIl19