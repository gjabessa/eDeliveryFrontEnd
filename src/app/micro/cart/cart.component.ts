import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/items.service';
import { baseUrl } from 'src/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  @Input() cart!:BehaviorSubject<Cart[]>;
  baseUrl: String = baseUrl;
  totalQty:number = 0;
  sum!: number;
  ngOnInit(): void {
    this.cart.subscribe(cart => {
      this.totalQty = cart.length > 0? cart.map(a => a.quantity).reduce((a,b)=>a+b):0;
      this.sum = cart.length > 0? cart.map(a => a.item.price*a.quantity).reduce((a,b)=>a+b):0
    })

  }

  
  remove(index:number){

    this.cartService.removeItem(index);
  }

  
}
