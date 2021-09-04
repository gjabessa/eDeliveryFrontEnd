import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environment';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  createOrder(orderData: any, cart:any,userid: String){
    let cart1 = cart.getValue().map((a: { item: any; quantity: any; }) => {return ({product:a.item, Amount: a.quantity})});
    return this.http.post(baseUrl+"/orders",{store:orderData.address, Cart:cart1, users_permissions_user: userid}).toPromise().then(this.complete).catch(this.fail)
  }
  complete(data:any){
    return data;
  }

  fail(err:Error){
    return err;
  }
}
