import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isLogin:boolean=false;

  //Inject Http and router services to get and route
  constructor(private http: HttpClient, private router: Router) { }

  //this function responsaible for get data for login from users api to check authrntication
  login(email:string,password:string){
    this.http.get<any>("https://dummyjson.com/users")
    .subscribe(res=>{
      console.log(res);
      const user =res.users.find((a:any)=>{
        return a.email === email && a.password === password ;
      });
      console.log(user);
      if(user){
        this.isLogin=true;
        alert('Login Succesful...');
        this.router.navigate(["home"]);
      }else{
        alert("user not found...!");
      }
    },err=>{
      alert("Something went wrong...!");
    })
  }


}
