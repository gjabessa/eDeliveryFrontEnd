import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(){
    let user = localStorage.getItem("user")
    let userid = JSON.parse(user? user: '').id;
    return this.http.get(baseUrl+"/orders?users_permissions_user="+userid).toPromise().then(this.complete).catch(this.fail)
  }

  complete(data: any){
    return data;
  } 

  fail(err: Error){
    throw new Error(JSON.stringify(err))
  }
}
