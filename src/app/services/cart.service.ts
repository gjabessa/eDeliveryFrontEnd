import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from './items.service';
import {a} from './test' ;
export interface Cart {
  item: Item,
  quantity:number
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { 
    this.cart = new BehaviorSubject(this.getItems());
  }
  
  getJson(){
    return of(a)
  }
  cart!:BehaviorSubject<Cart[]>;
  addToCart(item:Item, quantity: number){
    this.cart.next([...this.cart.getValue(),{item,quantity}]);
    localStorage.setItem("item", JSON.stringify(this.cart.getValue()))
  }

  removeItem(index:number){
    this.cart.getValue().splice(index,1)
    this.cart.next(this.cart.getValue())
    localStorage.setItem("item",JSON.stringify(this.cart.getValue()))
  }
  getItems():Cart[] {
    let items = JSON.parse(String(localStorage.getItem("item"))) // cast to string because it sometimes might return null
    return items?items:[]
  }

  getCart():BehaviorSubject<Cart[]>{
    return this.cart;
  }

  clearCart(){
    this.cart.next([])
    localStorage.removeItem("item");
  }
}
