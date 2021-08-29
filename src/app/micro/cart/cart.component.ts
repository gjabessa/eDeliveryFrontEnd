import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/items.service';
import { baseUrl } from 'src/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  @Input() cart!:BehaviorSubject<Item[]>;
  baseUrl: String = baseUrl;
  length!:Number;
  sum!: number;
  ngOnInit(): void {
    this.cart.subscribe(cart => {
      this.length = cart.length;
      this.sum = cart.map(a => a.price).reduce((a,b)=>a+b)
    })

  }

  
  remove(index:number){

    this.cartService.removeItem(index);
  }

  
}
