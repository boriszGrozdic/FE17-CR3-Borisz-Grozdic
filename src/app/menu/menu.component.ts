import { Component, OnInit } from '@angular/core';
import { orders } from '../orders/orders';
import { IOrders } from '../orders/IOrders';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  order: IOrders = {} as IOrders 
  orders : Array <IOrders> = orders;
  constructor() { }

  ngOnInit(): void {
  }

  

}
