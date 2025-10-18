import { Component, OnInit } from '@angular/core';
import { Productservice } from '../productsservices/productservice';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProduct } from '../add-edit-product/add-edit-product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product implements OnInit {
  constructor(public productServices: Productservice, public dialog: MatDialog) { }

  displayedColumns: string[] = [ 'name', 'category', 'price', 'actions'];
  productList: any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  // Get all products
  getProducts(): void {
    this.productServices.GetAllProducts().subscribe(res => {
      this.productList = res;
      console.log(this.productList);
    });
  }

  deleteUser(productid: string): void {
    this.productServices.DeleteProduct(productid).subscribe(res => {
      if (res) {
        this.getProducts();
      }
    });
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(AddEditProduct, { width: '80%', height: '60%' });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productServices.AddProduct(res).subscribe(value => {
          if (value) {
            this.getProducts();
          }
          console.log(res);
        });
      }
    });
  }
  editProduct(product:any){
  let dialogRef=  this.dialog.open(AddEditProduct,{data:product,width:"80%",height:"60%"})
  dialogRef.afterClosed().subscribe(res=>{
    if(res){
      this.productServices.EditProduct(res).subscribe(value=>{
        if(value){
          this.getProducts()
        }
      })
    }
  })
  
  }
}
  