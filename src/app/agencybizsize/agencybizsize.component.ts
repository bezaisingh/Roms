import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-agencybizsize",
  templateUrl: "./agencybizsize.component.html",
  styleUrls: ["./agencybizsize.component.css"],
  moduleId: module.id,
})
export class AgencybizsizeComponent implements OnInit {

  constructor(private page: Page, private routingExtensions: RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  back() {
    this.routingExtensions.backToPreviousPage();
  }

  showcalender() {
    this.routingExtensions.navigate(["agencybizsize"]);
  }
  
}
