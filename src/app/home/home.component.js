"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var httpService_1 = require(".././httpService");
var router_2 = require("nativescript-angular/router");
var moment = require("moment");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, router, myService, route, routerExtensions) {
        this.page = page;
        this.router = router;
        this.myService = myService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.myLoader = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.getDataInit();
        this.date = this.route.snapshot.params['date'];
        var check = moment(new Date(), 'YYYY/MM/DD');
        var month = check.format('M');
        var day = check.format('D');
        var year = check.format('YYYY');
        this.fromDate = new Date(year + '-' + month + '-' + '01');
        var date = new Date();
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.toDate = new Date(lastDay);
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.getDataInit = function () {
        var _this = this;
        this.myLoader = true;
        this.myService.getData('tab2.php')
            .subscribe(function (result) {
            _this.myLoader = false;
            _this.listData = result["membershipList"];
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.detail = function (name) {
        this.router.navigate(["/featured", {
                AG_NAME: name,
                date1: this.fromDate,
                date2: this.toDate
            }]);
    };
    HomeComponent.prototype.searchData = function () {
        var _this = this;
        this.myLoader = true;
        var url = 'tabfilter.php';
        var formData = new FormData();
        var date1 = moment(this.fromDate).format("YYYY-MM-DD");
        var date2 = moment(this.toDate).format("YYYY-MM-DD");
        formData.append('date1', date1);
        formData.append('date2', date2);
        console.log(date1, date2);
        this.myService.post(url, formData).subscribe(function (response) {
            console.log('response', response);
            _this.myLoader = false;
            if (response['status'] == 'success') {
                if (response['message']) {
                    _this.listData = [];
                    alert(response['message']);
                }
                else {
                    _this.listData = response["membershipList"];
                }
            }
        }, function (error) {
            console.log(error);
            _this.myLoader = false;
        });
    };
    HomeComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"],
            providers: [httpService_1.MyHttpService]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.Router,
            httpService_1.MyHttpService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFDcEQsc0RBQXFEO0FBQ3JELDBDQUF3RDtBQUN4RCxnREFBaUQ7QUFDakQsc0RBQStEO0FBQy9ELCtCQUFpQztBQVVqQztJQVFJLHVCQUFvQixJQUFVLEVBQ2xCLE1BQWMsRUFDZCxTQUF3QixFQUN4QixLQUFvQixFQUNwQixnQkFBa0M7UUFKMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFUdkMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVd4QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLEdBQUcsR0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEdB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QUssQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBckZRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDJCQUFhLENBQUM7U0FDN0IsQ0FBQzt5Q0FTNEIsV0FBSTtZQUNWLGVBQU07WUFDSCwyQkFBYTtZQUNsQix1QkFBYztZQUNGLHlCQUFnQjtPQVpyQyxhQUFhLENBc0Z6QjtJQUFELG9CQUFDO0NBQUEsQUF0RkQsSUFzRkM7QUF0Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlcixBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE15SHR0cFNlcnZpY2UgfSBmcm9tIFwiLi4vLi9odHRwU2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtNeUh0dHBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBsaXN0RGF0YTogYW55OyBcbiAgICBwdWJsaWMgbXlMb2FkZXIgPSBmYWxzZTtcbiAgICBwdWJsaWMgZGF0ZTtcbiAgICBwdWJsaWMgZnJvbURhdGU6YW55O1xuICAgIHB1YmxpYyB0b0RhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0RGF0YUluaXQoKTtcbiAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2RhdGUnXTsgIFxuICAgICAgICB2YXIgY2hlY2sgPSBtb21lbnQobmV3IERhdGUoKSwgJ1lZWVkvTU0vREQnKTsgXG4gICAgICAgIHZhciBtb250aCA9IGNoZWNrLmZvcm1hdCgnTScpO1xuICAgICAgICB2YXIgZGF5ICAgPSBjaGVjay5mb3JtYXQoJ0QnKTtcbiAgICAgICAgdmFyIHllYXIgID0gY2hlY2suZm9ybWF0KCdZWVlZJyk7XG4gICAgICAgIHRoaXMuZnJvbURhdGUgPSBuZXcgRGF0ZSh5ZWFyKyctJyttb250aCsnLScrJzAxJykgXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGxhc3REYXkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApOyBcbiAgICAgICAgdGhpcy50b0RhdGUgPSBuZXcgRGF0ZShsYXN0RGF5KVxuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG5cbiAgICBnZXREYXRhSW5pdCgpIHtcbiAgICAgICAgdGhpcy5teUxvYWRlciA9IHRydWU7XG4gICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldERhdGEoJ3RhYjIucGhwJylcbiAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm15TG9hZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gcmVzdWx0W1wibWVtYmVyc2hpcExpc3RcIl07XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRhaWwobmFtZSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZmVhdHVyZWRcIiwge1xuICAgICAgICAgICAgQUdfTkFNRTogbmFtZSxcbiAgICAgICAgICAgIGRhdGUxOiB0aGlzLmZyb21EYXRlLCBcbiAgICAgICAgICAgIGRhdGUyOiB0aGlzLnRvRGF0ZVxuICAgICAgICB9XSk7XG5cbiAgICB9XG5cbiAgICBzZWFyY2hEYXRhKCkgeyBcbiAgICAgICAgdGhpcy5teUxvYWRlciA9IHRydWU7ICBcbiAgICAgICAgY29uc3QgdXJsID0gJ3RhYmZpbHRlci5waHAnOyBcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICBcbiAgICAgICAgdmFyIGRhdGUxID0gbW9tZW50KHRoaXMuZnJvbURhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICAgdmFyIGRhdGUyID0gbW9tZW50KHRoaXMudG9EYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIFxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGUxJywgZGF0ZTEpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGUyJywgZGF0ZTIpOyBcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZTEsZGF0ZTIpOyAgXG4gICAgICAgIHRoaXMubXlTZXJ2aWNlLnBvc3QodXJsLCBmb3JtRGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScscmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5teUxvYWRlciA9IGZhbHNlO1xuICAgICAgICAgICAgaWYocmVzcG9uc2VbJ3N0YXR1cyddID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VbJ21lc3NhZ2UnXSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSBbXVxuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZVsnbWVzc2FnZSddKVxuICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSByZXNwb25zZVtcIm1lbWJlcnNoaXBMaXN0XCJdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB0aGlzLm15TG9hZGVyID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG59XG4iXX0=