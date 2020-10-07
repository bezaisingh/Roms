import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';


@Injectable()
export class MyHttpService {
    public serverUrl = "https://amptechsoftware.com/roms/";
    // private serverUrl = "http://13.232.219.53/ROMS/";

    constructor(private http: HttpClient) { }

    getData(url) {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl + url);
    }

    public createRequestHeader() {
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
        });
        return headers;
    }

    postData(url: string, name: string) {
        var body = "AG_NAME=" + name;
        const headers = new HttpHeaders({ 
            "Content-Type": 'application/x-www-form-urlencoded' 
        });
        return this.http.post(this.serverUrl + '/' + url, body, { headers: headers });

    }

    post(url, data) {
        const body = data;
        let httpOptions = {
            headers: new HttpHeaders({ 
                "Content-Type": "application/x-www-form-urlencoded",
             })
        }
        return this.http.post(this.serverUrl + url, body, httpOptions );
    }

    postJson(url, data) {
         var httpOptions = {
            headers: new HttpHeaders({ 
                "Content-Type": "application/json",
                'Accept': 'application/json'
            })
        }
        return this.http.post(this.serverUrl + url, data, httpOptions);
    }

    public createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return headers;
    }
}