import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page/page";
import { Router,ActivatedRoute } from "@angular/router";
import { MyHttpService } from ".././httpService";
import { RouterExtensions } from "nativescript-angular/router";
import * as moment from "moment";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    providers: [MyHttpService]
})
export class HomeComponent implements OnInit {

    public listData: any; 
    public myLoader = false;
    public date;
    public fromDate:any;
    public toDate: any;

    constructor(private page: Page,
        private router: Router,
        private myService: MyHttpService,
        private route:ActivatedRoute,
        private routerExtensions: RouterExtensions
        ) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.getDataInit();
        this.date = this.route.snapshot.params['date'];  
        var check = moment(new Date(), 'YYYY/MM/DD'); 
        var month = check.format('M');
        var day   = check.format('D');
        var year  = check.format('YYYY');
        this.fromDate = new Date(year+'-'+month+'-'+'01') 
        var date = new Date();
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); 
        this.toDate = new Date(lastDay)

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    getDataInit() {
        this.myLoader = true;
        this.myService.getData('tab2.php')
        .subscribe((result) => {
            this.myLoader = false;
            console.log(result);
            this.listData = result["AG_NAME"];
        }, (error) => {
            console.log(error);
        });
    }

    detail(name) {
        this.router.navigate(["/featured", {
            AG_NAME: name,
            date1: this.fromDate, 
            date2: this.toDate
        }]);

    }

    searchData() { 
        this.myLoader = true;  
        const url = 'tabfilter.php'; 
        let formData = new FormData();  
        var date1 = moment(this.fromDate).format("YYYY-MM-DD")
        var date2 = moment(this.toDate).format("YYYY-MM-DD") 
        formData.append('date1', date1);
        formData.append('date2', date2); 
        console.log(date1,date2);  
        this.myService.post(url, formData).subscribe(response => {
            console.log('response',response);
            this.myLoader = false;
            if(response['status'] == true){
                this.listData = response["AG_NAME"];
            }
        }, error => {
            console.log(error);
            this.myLoader = false;
        });
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }
}
