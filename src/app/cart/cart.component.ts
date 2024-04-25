import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cart:CartService){}

  cartitems:any;
  totalprice:any;
  cartlength:any;
  deleteitem:any;
  e:any;

  ngDoCheck(){
    this.cartlength=this.cart.getlength();
    this.totalprice=this.cart.getTotal();
  }

  ngOnInit(){
    this.cart.getItems().subscribe((res)=>{
      this.cartitems=res;
      console.log(this.cartitems);
    })
  }

  delete(e:any){
    this.cart.deleteitem(e);
    alert("cart item removed")
  }
  buy(e:any){
    this.cart.removeAll();
  Swal.fire({
      title: "Good job!",
      text: "Order placed successfully!",
      icon: "success"
    });

}}