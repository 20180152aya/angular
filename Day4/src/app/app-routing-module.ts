import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent } from './Compentent/parent/parent';

const routes: Routes = [
  {path:"", component:Parent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
