import { TestBed } from "@angular/core/testing"
import { CartService } from "./cart.service"
import { Item } from './items.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpClientModule } from "@angular/common/http";
fdescribe('cartService', () => {
  let service: CartService;
  let store:any;
  let httpTestingController: HttpTestingController;
  
  beforeEach(()=>{
   store = {};
    spyOn(localStorage,'setItem').and.callFake((key:string,val:string)=>{
      store[key] = `${val}`;
    });
    function checkUp(key:string):string{
      return store[key] ? store[key] : null;
    }
    spyOn(localStorage,'getItem').and.callFake(checkUp);
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    })
    service = TestBed.inject(CartService);
    // httpTestingController = TestBed.inject(HttpTestingController)
  })

  it('should be created',()=>{
    expect(service).toBeTruthy();
  })

  it('should add to cart', () => {
    let item:Item = {
      title: "test",
      description: "description",
      price: 12,
      slug: "slug",
      image: {
        formats: {}
      }
    }
    service.addToCart(item,2);
    expect(localStorage.setItem).toBeDefined();
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(store['item']).toBeTruthy();
    expect(store['item']).toBe(JSON.stringify([{item:item,quantity:2}]));
    expect(service.cart.getValue().length).toEqual(1);
  })

  it('should get json file', () => {
    service.getJson().subscribe(data => {
      expect(data).toBeTruthy();
      expect(Object.getPrototypeOf(data)).toBe(Object.prototype)
    })
  })
})
