import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
    this.cart = new BehaviorSubject(this.getItems());
  }
  cart!:BehaviorSubject<Item[]>;
  addToCart(item:Item){
    this.cart.next([...this.cart.getValue(),item]);
    localStorage.setItem("item", JSON.stringify(this.cart.getValue()))
  }

  removeItem(index:number){
    this.cart.getValue().splice(index,1)
    this.cart.next(this.cart.getValue())
    localStorage.setItem("item",JSON.stringify(this.cart.getValue()))
  }
  getItems():Item[] {
    let items = JSON.parse(String(localStorage.getItem("item"))) // cast to string because it sometimes might return null
    return items?items:[]
  }

  getCart():BehaviorSubject<Item[]>{
    return this.cart;
  }

  clearCart(){
    this.cart.next([])
    localStorage.removeItem("item");
  }
}
