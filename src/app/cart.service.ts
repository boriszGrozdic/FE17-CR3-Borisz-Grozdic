import { Injectable } from '@angular/core';
import { IOrders } from './orders/IOrders';




@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array <IOrders> = [];
  total:number = 0;
  total1:number = 0;
  total2:number = 0;
  total3:number = 0;  
  total4:number = 0;
  
  
  
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
    this.total = 0
    for(let val of this.items){
    
    this.total +=  val.price
  }
    return this.total
    
  }
  

  sumService () {
    
      this.total2 = this.total * 0.1;
    
    
    return Math.floor(this.total2)
  }

  sumBigger () {
    this.total3 = this.total * 0.15;
    return Math.floor(this.total3)
  }

  sumTotalDiscount () {
    this.total4 = this.total - Math.floor(this.total3)
    return (this.total4)
  }
  



  
}
