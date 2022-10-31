import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private loginService:LoginServiceService,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }

  login(){
    this.loginService.login(this.email,this.password);
    this.email='';
    this.password='';
   /* this.http.get<any>("https://dummyjson.com/users")
    .subscribe(res=>{
      console.log(res);
      const user =res.users.find((a:any)=>{
        return a.email === this.email && a.password === this.password ;
      });
      console.log(user);
      if(user){
        alert('Login Succesful');
        this.email='';
        this.password='';
        this.router.navigate(["home"]);
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong");
    })*/
  }

}
