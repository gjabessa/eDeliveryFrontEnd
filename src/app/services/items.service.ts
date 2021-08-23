import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environment';

export interface Item{
  title: String,
  description: String,
  price: Number,
  slug: String,
  image: {
    formats:{
      [key:string]:{
        url:string
      }
    }
  },
}
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
  item!: Item;

  baseUrl = baseUrl+"/products";

  getItems(): Promise<Item[]>{
    return this.http.get<Item[]>(this.baseUrl).toPromise().then(data => this.success(data)).catch(this.fail);
  }
  getItem(id:String): Promise<Item>{
    return this.http.get<Item[]>(this.baseUrl+"/"+id).toPromise().then(data => this.success(data)).catch(this.fail);
  }
  success(data: any){
    return data;
  }
 
  fail(err: Error){
    return err;
  }
  setItem(item: Item){
    this.item = item;
  }

}
