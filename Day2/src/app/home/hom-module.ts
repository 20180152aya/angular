import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Homecomp } from './homecomp/homecomp';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    Homecomp
  ],
  imports: [
    CommonModule ,
    HomeRoutingModule
  ]
})
export class HomModule { }
