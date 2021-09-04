import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item, ItemsService } from 'src/app/services/items.service';
import { baseUrl } from 'src/environment';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() item:any = {};
  baseUrl: String = baseUrl;
  constructor(private cartService: CartService) { }
  quantity: number = 1;
  
  ngOnInit(): void {
    
  }

  increment(){
    this.quantity++;
  }

  decrement(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }
  addToCart(item:Item){
    this.cartService.addToCart(item,this.quantity)
  }

}
