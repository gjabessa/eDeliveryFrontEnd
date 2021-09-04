import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Cart, CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
import { Item } from '../services/items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService, private authService: AuthenticationService, private checkoutService: CheckoutService) { }
  cart!: BehaviorSubject<Cart[]>;
  user!: any;
  checkoutForm = new FormGroup({
    address: new FormControl('',Validators.required)
  });
  ngOnInit(): void {
    this.getCarts();
    this.getUser()
  }
  getCarts(){
    this.cart = this.cartService.getCart();
  }

  getUser(){
    this.user = this.authService.getUser();
    console.log(this.authService.getUser())
  }

  submit(){
    if(this.checkoutForm.invalid){
      this.checkoutForm.markAsTouched()
    } else {
      this.createOrder();
      this.checkoutForm.reset();
      this.checkoutForm.markAsUntouched()
    }
  }

  createOrder(){
    let cart = this.cartService.getCart();
    let userid = this.authService.getUser().id;
    this.checkoutService.createOrder(this.checkoutForm.value, cart,userid).then(this.afterOrderCreated);
  }
  afterOrderCreated = () => {
    // do other things
    this.cartService.clearCart()
  }


}
