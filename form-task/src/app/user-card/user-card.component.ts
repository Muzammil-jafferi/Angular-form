import { Component, OnInit } from '@angular/core';
import User from '../Usermodel';
import { UsermodelService } from '../usermodel.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  users: any;

  constructor(private bs: UsermodelService) { }

  ngOnInit() {
    this.bs
      .getUsers()
      .subscribe((data) => {
        const result: any = data;
        this.users = result._result;
    });
  }

  getUserInfo(user) {
    alert(`FullName: ${user.first_name} ${user.last_name} \nCompany Name: ${user.company_name} \nMobile No: ${user.mobile}`)
  }

}
