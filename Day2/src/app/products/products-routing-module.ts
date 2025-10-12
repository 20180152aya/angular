import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';

const routes: Routes = [
  { path: '', component: ProductList,
    children: [
      {path:":id",component:ProductDetails}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
