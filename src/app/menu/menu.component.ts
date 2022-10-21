import { Component, OnInit } from '@angular/core';
import { orders } from '../orders/orders';
import { IOrders } from '../orders/IOrders';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  orders : Array <IOrders> = orders;
  constructor(private cs: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: IOrders) {
    this.cs.addToCart(product)
  }
  
  
}
