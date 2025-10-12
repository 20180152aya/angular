import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = [
    { id: 1, name: 'Laptop', price: 10000 },
    { id: 2, name: 'Mouse', price: 200 },
    { id: 3, name: 'Phone', price: 200 }
  ];
  constructor(public route:Router ) { }

  openMenu(id:number){
    const name =this.products.find(x=>x.id ==id)?.name;
    const price =this.products.find(x=>x.id ==id)?.price;
    this.route.navigate(["products",id],
      {queryParams:{des:name,price:price}});
  }


}
