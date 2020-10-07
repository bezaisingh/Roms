"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MyHttpService = /** @class */ (function () {
    function MyHttpService(http) {
        this.http = http;
        this.serverUrl = "http://13.232.91.6/roms/";
    }
    MyHttpService.prototype.getData = function (url) {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl + url);
    };
    MyHttpService.prototype.createRequestHeader = function () {
        var headers = new http_1.HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
        });
        return headers;
    };
    MyHttpService.prototype.postData = function (url, name) {
        var body = "AG_NAME=" + name;
        var headers = new http_1.HttpHeaders({ "Content-Type": 'application/x-www-form-urlencoded' });
        return this.http.post(this.serverUrl + '/' + url, body, { headers: headers });
    };
    MyHttpService.prototype.post = function (url, data) {
        var body = data;
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                "Content-Type": "application/x-www-form-urlencoded",
            })
        };
        return this.http.post(this.serverUrl + url, body, httpOptions);
    };
    MyHttpService.prototype.postJson = function (url, data) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                "Content-Type": "application/json",
                'Accept': 'application/json'
            })
        };
        return this.http.post(this.serverUrl + url, data, httpOptions);
    };
    MyHttpService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return headers;
    };
    MyHttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MyHttpService);
    return MyHttpService;
}());
exports.MyHttpService = MyHttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBeUY7QUFJekY7SUFHSSx1QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixjQUFTLEdBQUcsMEJBQTBCLENBQUM7SUFFUCxDQUFDO0lBRXpDLCtCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTywyQ0FBbUIsR0FBM0I7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDMUIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEdBQVcsRUFBRSxJQUFZO1FBQzlCLElBQUksSUFBSSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFLENBQUMsQ0FBQztRQUN6RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUVsRixDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLEdBQUcsRUFBRSxJQUFJO1FBQ1YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksV0FBVyxHQUFHO1lBQ2QsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztnQkFDckIsY0FBYyxFQUFFLG1DQUFtQzthQUNyRCxDQUFDO1NBQ04sQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsR0FBRyxFQUFFLElBQUk7UUFDYixJQUFJLFdBQVcsR0FBRztZQUNmLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7Z0JBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0IsQ0FBQztTQUNMLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBS08sNENBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXREUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBSWlCLGlCQUFVO09BSDNCLGFBQWEsQ0F5RHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15SHR0cFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHA6Ly8xMy4yMzIuOTEuNi9yb21zL1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgZ2V0RGF0YSh1cmwpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsICsgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBcIkF1dGhLZXlcIjogXCJteS1rZXlcIixcclxuICAgICAgICAgICAgXCJBdXRoVG9rZW5cIjogXCJteS10b2tlblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwb3N0RGF0YSh1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBcIkFHX05BTUU9XCIgKyBuYW1lO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyAnLycgKyB1cmwsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZGF0YTtcclxuICAgICAgICBsZXQgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNlcnZlclVybCArIHVybCwgYm9keSwgaHR0cE9wdGlvbnMgKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0SnNvbih1cmwsIGRhdGEpIHtcclxuICAgICAgICAgdmFyIGh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyB1cmwsIGRhdGEsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RPcHRpb25zKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19