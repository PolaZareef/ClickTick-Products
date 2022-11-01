import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private loginService:LoginServiceService,private router: Router) { }

  ngOnInit(): void {
    
  }
  /*check for inputs from users and check validation and authentication
  and call login method from login service */
  login(){
    if(this.email==="" && this.password==="")
    {
      alert("Please Enter your Email and Password...!");
      return;
    }
    this.loginService.login(this.email,this.password);
    this.email='';
    this.password='';
  }
  //navigate to home component when click home after check validate of login
  home(){
    if(this.loginService.isLogin===true)
    {
      this.router.navigate(["home"]);
    }
    else{
      alert("Please Login with your Account...!");
    }
  }

}
