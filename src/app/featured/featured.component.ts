import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { MyHttpService } from ".././httpService";
import * as moment from "moment";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ["./featured.component.css"],
    providers: [MyHttpService]
})
export class FeaturedComponent implements OnInit {

    public datas: any;
    public myLoader = false; 
    public fromDate: any;
    public toDate: any;

    constructor(
        private page: Page, 
        private routerExtansions: RouterExtensions,
        private route:ActivatedRoute,
        private myService: MyHttpService,
        ) {

    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        var name = this.route.snapshot.params['AG_NAME']; 
        var date1 = moment(this.route.snapshot.params['date1']).format("YYYY-MM-DD")
        var date2 = moment(this.route.snapshot.params['date2']).format("YYYY-MM-DD") 
        this.fromDate = moment(this.route.snapshot.params['date1']).format("YYYY-MM-DD")
        this.toDate = moment(this.route.snapshot.params['date2']).format("YYYY-MM-DD") 
        this.myLoader = true;  
        let formData = new FormData();
        formData.append('AG_NAME', name); 
        formData.append('date1', date1);
        formData.append('date2', date2);    

        console.log(date1);
        console.log(date2);

        this.myService.post('tabdata.php', formData).subscribe((result) => {
            console.log("Details", result);
            this.myLoader = false;
            this.datas = result['AG_NAME'][0];
            console.log(this.datas);
        }, (error) => {
            console.log(error);
        });

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    back() {
        this.routerExtansions.backToPreviousPage();
    }
}
