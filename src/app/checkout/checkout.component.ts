import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Item } from '../services/items.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }
  cart!: BehaviorSubject<Item []>;
  ngOnInit(): void {
    this.getCarts();
  }
  getCarts(){
    this.cart = this.cartService.getCart();
  }

}
