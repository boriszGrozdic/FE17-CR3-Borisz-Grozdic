import { Injectable } from '@angular/core';
import { IOrders } from './orders/IOrders';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array <IOrders> = [];
  total:number = 0;
  
  constructor() { }

  addToCart(product: IOrders) {
    this.items.push(product)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  sumTotal () {
    for(let val of this.items){
      this.total +- val.price
    }
    return this.total
  }


  
}
