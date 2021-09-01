import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrdersService) { }
  orders!: any;
  ngOnInit(): void {
    this.orders = this.getOrders();
   
  }

  async getOrders(){
    console.log(await this.orderService.getOrders())
    return await this.orderService.getOrders();
  }
  
 
}
