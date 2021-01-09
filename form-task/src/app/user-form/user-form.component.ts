import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsermodelService } from '../usermodel.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private bs: UsermodelService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      company_name: ['', Validators.required],
      mobile: ['', Validators.required ]
    });
  }

  addUserDetails(first_name, last_name, company_name,mobile) {
    this.bs.addUserDetails(first_name, last_name, company_name,mobile);
  }

  ngOnInit() {
  }

}
