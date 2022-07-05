import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'printer-app';
  print_count = 2;
  orders_list = [{
    "id": 1047,
    "order_no": "ORD01047",
    "products": [{
      "id": 1723,
      "product": 1124,
      "quantity": 1,
      "name": "Chicken Tikka Biriyani (3 Pieces Chicken)",
      "sub_total": 100.0,
      "product_unit": "1 Nos"
    },
    {
      "id": 1724,
      "product": 1124,
      "quantity": 1,
      "name": "Jumbo Beef Biriyani (5 Pieces )",
      "sub_total": 100.0,
      "product_unit": "1 Nos"
    },
    {
      "id": 1725,
      "product": 1124,
      "quantity": 1,
      "name": "Lime",
      "sub_total": 20.0,
      "product_unit": "1 Nos"
    }],
    "time": "04/06/2022 14:30 PM",
    "note": null,
    "total": 220.0,
    "is_ready_for_pick_up": true,
    "is_order_confirmed": false
  }, {
    "id": 969,
    "order_no": "ORD00969",
    "products": [{
      "id": 1593,
      "product": 1124,
      "quantity": 1,
      "name": "Paneer Magani Burgee with Cheese Dosa",
      "sub_total": 150.0,
      "product_unit": "1 Kg"
    },{
      "id": 1594,
      "product": 1124,
      "quantity": 1,
      "name": "Paneer Dosa",
      "sub_total": 50.0,
      "product_unit": "1 Kg"
    }],
    "time": "30/04/2022 10:45 AM",
    "note": null,
    "total": 200.0,
    "is_ready_for_pick_up": true,
    "is_order_confirmed": true
  }, {
    "id": 966,
    "order_no": "ORD00966",
    "products": [{
      "id": 1590,
      "product": 1124,
      "quantity": 2,
      "name": "McSpicy Chicken Burger + Veg Pizza McPuff",
      "sub_total": 400.0,
      "product_unit": "1 Kg"
    },{
      "id": 1591,
      "product": 1124,
      "quantity": 2,
      "name": "American Cheese Supreme - Chicken + Fries (R)",
      "sub_total": 200.0,
      "product_unit": "1 Kg"
    },{
      "id": 1592,
      "product": 1124,
      "quantity": 2,
      "name": "McSaver American Cheese Supreme - Chicken Meal",
      "sub_total": 100.0,
      "product_unit": "1 Kg"
    }],
    "time": "29/04/2022 10:48 AM",
    "note": null,
    "total": 700.0,
    "is_ready_for_pick_up": true,
    "is_order_confirmed": true
  }]

  acceptOrder(order:any){
    console.log(order, this.print_count)
  }
}
