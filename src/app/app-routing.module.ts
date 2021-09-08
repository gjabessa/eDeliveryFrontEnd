import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"",component: WelcomeComponent},
{path:"items/:id", component: ItemDetailComponent},
{path: "orders", component: OrdersComponent},
{path:"items", component: ItemsComponent},
{path:"checkout", component: CheckoutComponent},
{path:"login", component: LoginComponent},
{path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
