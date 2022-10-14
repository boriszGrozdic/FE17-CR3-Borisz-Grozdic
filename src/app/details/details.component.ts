import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { orders } from '../orders/orders';
import { IOrders } from '../orders/IOrders';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  order: IOrders = {} as IOrders 
  id: number = 0;
  constructor(private route : ActivatedRoute, private cs: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.order = orders[this.id];
    })
  }

  addToCart() {
    alert("Your product has been added to the cart!")
    this.cs.addToCart(this.order)
  }

}
