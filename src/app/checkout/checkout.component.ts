import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../services/cart.service';
import { Item } from '../services/items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService, private authService: AuthenticationService) { }
  cart!: BehaviorSubject<Item []>;
  user!: any;
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

}
