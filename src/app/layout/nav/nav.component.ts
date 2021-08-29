import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/items.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthenticationService, private cartService: CartService) { }

  cartAmount!: Number;
  ngOnInit(): void {
   this.cartService.getCart().subscribe(a => this.cartAmount = a.length)
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }
  signout(){
    return this.authService.logout()
  }
}
