import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpClient } from '@angular/common/http';
import { MyHttpService } from ".././httpService";
import 'nativescript-localstorage';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  public error = '';
  public blankError = false;
  public myLoader = false;

  public loginData = {
    username: '',
    password: ''
  };

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private http: HttpClient,
    private httpService: MyHttpService
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    var Login = localStorage.getItem('Logindata')
    if (Login == 'true') {
      this.routerExtensions.navigate(['/dashboard']);
    }
  }

  login() {
    // this.routerExtensions.navigate(['/dashboard']);
    this.error = '';
    this.blankError = false;
    if (this.loginData.username == '' || this.loginData.password == '') {
      this.blankError = true;
    } else {
      this.myLoader = true;
      const formData = new FormData();
      formData.append('USERID', this.loginData.username);
      formData.append('PASSWRD', this.loginData.password);
      const url = "login.php";
      this.httpService.post(url, formData).subscribe(res => {
        console.log('Success: ', res);
        this.myLoader = false;
        if (res["status"]) {
          this.routerExtensions.navigate(['/dashboard']);
          localStorage.setItem('Logindata', 'true');
        } else {
          this.error = res['message'];
        }
      }, error => {
        console.log('Error: ', error);
        this.myLoader = false;
      });
    }

  }

}
