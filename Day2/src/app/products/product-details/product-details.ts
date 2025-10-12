import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

id:number=0
des:string =""
price:number=0
  constructor(public route:ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.route.queryParamMap.subscribe(x=>
     {
      this.des = x.get('des') as string;
     }); 

    this.route.queryParamMap.subscribe(x=>
    {
      this.price = Number(x.get('price'));
    } 
    );   
   }


}
