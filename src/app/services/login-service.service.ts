import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email:string,password:string){
    this.http.get<any>("https://dummyjson.com/users")
    .subscribe(res=>{
      console.log(res);
      const user =res.users.find((a:any)=>{
        return a.email === email && a.password === password ;
      });
      console.log(user);
      if(user){
        alert('Login Succesful');
        this.router.navigate(["home"]);
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong");
    })
  }


}
