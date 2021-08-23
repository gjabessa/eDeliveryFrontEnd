import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './layout/nav/nav.component';
import { OrdersComponent } from './orders/orders.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DisplayComponent } from './layout/display/display.component';
import { ItemsListComponent } from './sections/items-list/items-list.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SingleItemComponent } from './micro/single-item/single-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './micro/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    OrdersComponent,
    WelcomeComponent,
    NavComponent,
    DisplayComponent,
    ItemsListComponent,
    FooterComponent,
    SingleItemComponent,
    CheckoutComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
