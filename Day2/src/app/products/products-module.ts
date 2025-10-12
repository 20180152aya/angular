import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';


@NgModule({
  declarations: [
    ProductList,
    ProductDetails
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
