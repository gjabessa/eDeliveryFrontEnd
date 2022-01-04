import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { baseUrl } from 'src/environment';
import { CartService } from '../services/cart.service';
import { Item, ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item!:Item;
  baseUrl = baseUrl;
  addedToCart: boolean = false;
  constructor(private itemsService: ItemsService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItem();
    this.cartService.getJson().subscribe(data => {
      console.log(data)
    })
  }

  async getItem(){
    this.item = await this.itemsService.getItem(this.route.snapshot.params.id);
  }

  quantity: number = 1;
  
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
