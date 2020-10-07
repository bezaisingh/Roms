"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/common/http");
var httpService_1 = require(".././httpService");
require("nativescript-localstorage");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, routerExtensions, http, httpService) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.http = http;
        this.httpService = httpService;
        this.error = "";
        this.blankError = false;
        this.myLoader = false;
        this.loginData = {
            username: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        var Login = localStorage.getItem('Logindata');
        if (Login == 'true') {
            this.routerExtensions.navigate(["/dashboard"]);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.error = "";
        this.blankError = false;
        if (this.loginData.username == "" || this.loginData.password == "") {
            this.blankError = true;
        }
        else {
            this.myLoader = true;
            var formData = new FormData();
            formData.append('Userid', this.loginData.username);
            formData.append('passwrd', this.loginData.password);
            var url = "login.php";
            this.httpService.post(url, formData)
                .subscribe(function (res) {
                console.log('Success: ', res);
                _this.myLoader = false;
                if (res["status"]) {
                    _this.routerExtensions.navigate(["/dashboard"]);
                    localStorage.setItem('Logindata', 'true');
                }
                else {
                    _this.error = res["message"];
                }
            }, function (error) {
                console.log('Error: ', error);
                _this.myLoader = false;
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            http_1.HttpClient,
            httpService_1.MyHttpService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFDL0QsNkNBQW1EO0FBQ25ELGdEQUFpRDtBQUNqRCxxQ0FBbUM7QUFRbkM7SUFVRSx3QkFDVSxJQUFVLEVBQ1YsZ0JBQWtDLEVBQ2xDLElBQWdCLEVBQ2hCLFdBQTBCO1FBSDFCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFicEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGNBQVMsR0FBRztZQUNsQixRQUFRLEVBQUcsRUFBRTtZQUNiLFFBQVEsRUFBRyxFQUFFO1NBQ2QsQ0FBQztJQU9JLENBQUM7SUFFUCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDN0MsSUFBRyxLQUFLLElBQUksTUFBTSxFQUFDO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkEyQkM7UUExQkMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztpQkFDbkMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNqQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzFDO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUM3QjtZQUNILENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFFSCxDQUFDO0lBcERVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBWWdCLFdBQUk7WUFDUSx5QkFBZ0I7WUFDNUIsaUJBQVU7WUFDSCwyQkFBYTtPQWR6QixjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCAgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNeUh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4vaHR0cFNlcnZpY2VcIjtcbmltcG9ydCAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVycm9yID0gXCJcIjtcbiAgYmxhbmtFcnJvciA9IGZhbHNlO1xuICBwcml2YXRlIG15TG9hZGVyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBsb2dpbkRhdGEgPSB7XG4gICAgdXNlcm5hbWUgOiBcIlwiLFxuICAgIHBhc3N3b3JkIDogXCJcIlxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IE15SHR0cFNlcnZpY2VcbiAgICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHZhciBMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMb2dpbmRhdGEnKSBcbiAgICBpZihMb2dpbiA9PSAndHJ1ZScpe1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0pO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKCkgeyBcbiAgICB0aGlzLmVycm9yID0gXCJcIjtcbiAgICB0aGlzLmJsYW5rRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5sb2dpbkRhdGEudXNlcm5hbWUgPT0gXCJcIiB8fCB0aGlzLmxvZ2luRGF0YS5wYXNzd29yZCA9PSBcIlwiKSB7XG4gICAgICB0aGlzLmJsYW5rRXJyb3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm15TG9hZGVyID0gdHJ1ZTsgICAgICBcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ1VzZXJpZCcsIHRoaXMubG9naW5EYXRhLnVzZXJuYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dyZCcsIHRoaXMubG9naW5EYXRhLnBhc3N3b3JkKTtcbiAgICAgIGNvbnN0IHVybCA9IFwibG9naW4ucGhwXCI7XG4gICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QodXJsLCBmb3JtRGF0YSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6ICcsIHJlcyk7XG4gICAgICAgIHRoaXMubXlMb2FkZXIgPSBmYWxzZTsgXG4gICAgICAgIGlmIChyZXNbXCJzdGF0dXNcIl0pIHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2Rhc2hib2FyZFwiXSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0xvZ2luZGF0YScsJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVycm9yID0gcmVzW1wibWVzc2FnZVwiXTtcbiAgICAgICAgfVxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgdGhpcy5teUxvYWRlciA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICB9XG5cbn1cbiJdfQ==