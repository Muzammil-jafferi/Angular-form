import { Component, OnInit } from '@angular/core';
import { UsermodelService } from '../usermodel.service';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.css']
})
export class UserTemplateFormComponent implements OnInit {

  data: any = {};
  constructor(private bs: UsermodelService) {
  }

  onSubmit() {
    alert(JSON.stringify(this.data));
    this.bs.addUserDetails(this.data.first_name, this.data.last_name, this.data.company_name,this.data.mobile);
  }
  

  ngOnInit(): void {
  }


}
