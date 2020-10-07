import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { MyHttpService } from ".././httpService";
import { Router } from "@angular/router";

@Component({
  selector: "ns-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  moduleId: module.id,
  providers: [MyHttpService]
})



export class DashboardComponent implements OnInit {

  public tender: any;
  public notice: any;
  public display: any;
  public myLoader = false;

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private myService: MyHttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.tenderHttp()
    this.noticeHttp()
    this.displayHttp()
  }


  tenderHttp() {
    this.myLoader = true
    this.myService.getData('tender-dashboard.php').subscribe((result) => {
      console.log(result);
      this.myLoader = false;
      this.tender = result;
    }, (error) => {
      console.log(error);
    });
  }


  noticeHttp() {
    this.myService.getData('notice-dashboard.php').subscribe((result) => {
      this.notice = result;
    }, (error) => {
      console.log(error);
    });
  }

  displayHttp() {
    this.myService.getData('display-dashboard.php').subscribe((result) => {
      this.display = result;
    }, (error) => {
      console.log(error);
    });
  }


  detail() {
    this.routerExtensions.navigate(["agencybizsize"]);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  clikNavigate() {
    this.router.navigate(["home", { date: this.tender['monthCurrent'] }]);
  }

  moreBtn() {

  }
}