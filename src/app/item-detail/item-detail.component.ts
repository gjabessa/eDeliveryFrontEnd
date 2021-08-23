import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { baseUrl } from 'src/environment';
import { Item, ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item!:Item;
  baseUrl = baseUrl;
  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItem();
  }

  async getItem(){
    this.item = await this.itemsService.getItem(this.route.snapshot.params.id);
  }

}
