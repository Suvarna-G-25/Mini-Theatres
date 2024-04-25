import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { CartService } from '../services/cart.service';
import { event } from '../services/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  constructor(private Service:EventsService,private cart:CartService){}
  events:any;
  addtocart(pro:event){
    this.cart.addItemtoCart(pro);
    alert('Your product has been added to the cart');
  }
  ngOnInit(){
    this.Service.getEvents().subscribe((result)=>{
      this.events=result;
      
    })
  }
}
