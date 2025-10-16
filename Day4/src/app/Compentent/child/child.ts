import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sharedservices } from '../../Servies/sharedservices';
@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
 
   @Input() username!:string


@Output() message = new EventEmitter<string>()
sendMessage(){
  this.message.emit("hello from child to parent")
}
constructor(public service:Sharedservices){

}


}
