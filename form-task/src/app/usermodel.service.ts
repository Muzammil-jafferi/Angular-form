import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsermodelService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient,private router: Router,private ngZone: NgZone) { }

  addUserDetails(first_name, last_name, company_name, mobile) {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      company_name: company_name,
      mobile: mobile
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => {
        console.log('Done');
        this.ngZone.run(() => this.router.navigateByUrl('/user-details'))
      });
  }

  getUsers() {
    return this.http.get(`${this.uri}/fetch`)
  }
}
