import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IOrders } from '../orders/IOrders';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {
  items: Array<IOrders> = [];
  total:number = 0;
  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.items = this.cs.getItems();

  }


}
