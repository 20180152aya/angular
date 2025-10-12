import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomModule } from './home/hom-module';
import { ProductsModule } from './products/products-module';
import { AccountModule } from './account/account-module';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => 
      import('./home/hom-module').then(m => m.HomModule)
  },

   {
    path: 'products',
    loadChildren: () => import('./products/products-module').then(m => m.ProductsModule)
  },
  {
  path: 'account',
  loadChildren: () => import('./account/account-module').then(m => m.AccountModule)
},
{
  path:'**',
  redirectTo:'home',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
