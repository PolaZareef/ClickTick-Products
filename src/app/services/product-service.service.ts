import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:any[]=[]

  constructor(private http:HttpClient) { }

}