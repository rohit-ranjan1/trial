import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

import { EmployeeService } from '../Employee.service';

 

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent  { 

  Username:string = "";
  Password:string="";
  errorMessage:string=""; 

  constructor(private x: Router, private user:EmployeeService) { }

  userDetail:any =[
    {"name":"Rohit","pass":"ranjan"},
    {"name":"rahul","pass":"ranjan1"}
]

  ngOnInit() {

  }

  Login()
  {
    console.log(this.Username);
    for(let i=0;i<this.userDetail.length;i++){
      if(this.userDetail[i].name == this.Username && this.userDetail[i].pass == this.Password){
        this.user.setUserLoggedIn();
        this.x.navigate(['/Product']); 
        break;
        
      }
      if(i== this.userDetail.length-1)
        {
          this.x.navigate(['/notFound']);
        }
  }
    // if(this.Password == "ranjan" && this.Username=="rohit")
    // {
    //   this.user.setUserLoggedIn();
    //   this.x.navigate(['/Product']);
    // }
    // else
    // {
    //   this.x.navigate(['/notFound']);
    // }
  }
}