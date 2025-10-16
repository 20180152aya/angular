import { Component, Input, OnInit } from '@angular/core';
import { Sharedservices } from '../../Servies/sharedservices'; // Adjust the path as needed

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  providers: [Sharedservices]
})
export class Parent implements OnInit  {
    username:string=""
    message=''
    receive($event:string){
      this.message=$event
    }
    constructor(public service:Sharedservices){

    }
    ngOnInit(): void {
      
    }
    setValue(){
      this.service.setValue('from parent to service')
    }

}
