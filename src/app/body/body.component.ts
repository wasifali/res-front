import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    public users = [];

    constructor(private http: HttpClient) {
    }

    getUsers(){
      this.http.get('http://localhost:3005/api/user/get').subscribe(data => {
        console.log(data);
      });
    }

        ngOnInit(): void{
            this.http.get('http://localhost:3005/api/restaurant/list').subscribe(data => {
              //this.users = data;
              console.log(data);
            });
    }

}
