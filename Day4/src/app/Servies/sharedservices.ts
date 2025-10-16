import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sharedservices {
  data=''
  constructor(){}
  setValue(value:string){
    this.data = value
  }

  getValue(){
    return this.data
  }
}
