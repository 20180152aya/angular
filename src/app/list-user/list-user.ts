import { Component } from '@angular/core';

@Component({
  selector: 'app-list-user',
  standalone: false,
  templateUrl: './list-user.html',
  styleUrl: './list-user.css'
})
export class ListUser {
  userList=[
    {name:"aya",age:22,email:"ay@gmail.com",color:"red",status:true},
    {name:"eman",age:25,email:"m@gmail.com",color:"blue",status:false},
    {name:"sara",age:20,email:"s@gmail.com",color:"green",status:true},
  ]
  user:string="aya";
  showUser:boolean=true;
  
  toggleUser(){
    this.showUser=!this.showUser;
  }
}
