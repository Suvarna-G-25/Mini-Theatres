import { Injectable } from '@angular/core';
import { event } from './events';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
   
  cartitems:event[]=[];
  addItemtoCart(event:event){
    this.cartitems.push(event);
  }           

  getItems(){
    return of(this.cartitems);
  }

  getlength(){
    return this.cartitems.length;
  }

  getTotal(){
    let total=0;
    for(let i=0;i<this.cartitems.length;i++){
      total+=this.cartitems[i].eventPrice;
    }
    return total;
  }

  deleteitem(pod:event){
    let res=this.cartitems.findIndex(e=>e.eventId==pod.eventId);
    this.cartitems.splice(res,1)
  }
  buynow(pod:event){
    let res=this.cartitems.findIndex(e=>e.eventId==pod.eventId);
    this.cartitems.splice(res,1)
  }
  removeAll(){
    this.cartitems.splice(0,this.cartitems.length)

 }

}
