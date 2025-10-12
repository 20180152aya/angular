import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Update the import path and class name to match the actual component file and class name
import { Homecomp } from './homecomp/homecomp';
const routes: Routes = [
  { path: '', component: Homecomp } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }