import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[]=[];
  products1:any[]=[];
  category:any[]=[];
  searchTitle:string="";
  searchCategory:string="";
  orderNumber:number=0;

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    //get data of products from products api when this component render
    this.http.get<any>("https://dummyjson.com/products")
    .subscribe(res=>{
      this.products=res.products;
      for(let i=0;i<this.products.length;i++)
    {
      //loop to get category to add it to checkbox list
      if(this.products[i+1].category!==this.products[i].category)
      {
        this.category.push(this.products[i].category);
      }
      else{
        continue;
      }
    }
    });
  }

  home(){//get data of products from server if remove search text and click home
    this.searchTitle="";
    this.http.get<any>("https://dummyjson.com/products")
    .subscribe(res=>{
      this.products=res.products;
  });
    this.router.navigate(["/home"]);
  }
  addToCard(){
    //add number of order to card
    this.orderNumber+=1;
  }
  searching(){
    //searching based on product title
    console.log(this.searchTitle);
    for(let i=0;i<this.products.length;i++)
    {
      if(this.products[i].title.toLowerCase()===this.searchTitle.toLocaleLowerCase())
      {
        this.products1.push(this.products[i]);
      }
    }
    this.products=this.products1;
    this.products1=[];
    console.log(this.products);   
  }

}
