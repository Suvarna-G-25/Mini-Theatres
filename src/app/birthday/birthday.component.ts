import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { CartService } from '../services/cart.service';
import { event } from '../services/events';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {
  
  constructor(private service : EventsService,private cart:CartService){}
  cartItems:event[]=[];
  addItemtoCart(event:event){
    this.cartItems.push(event);
  }
  event:any;
  addtocart(pro:event){
    this.cart.addItemtoCart(pro);
    alert('Your product has been added to the cart');
  }
  ngOnInit(){
    this.service.getEvents().subscribe((result)=>{
      this.event=result;
      console.log(this.event);
    })
    
    }
  }

