import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../env.devlopment';

@Injectable({
  providedIn: 'root'
})
export class Productservice {

  private readonly url=environment.apiUrl


  constructor( public http:HttpClient){

  }
// get all products
  GetAllProducts(){
    return this.http.get(this.url)
  }

  // delete product
  DeleteProduct(id:string){
    return this.http.delete(`${this.url}/${id}`)
  }

  // Add product

  AddProduct(product:any){
    return this.http.post(this.url,product)
  }
  // edit

  EditProduct(product:any){
    return this.http.put(`${this.url}/${product.id}`,product)
  }


}
