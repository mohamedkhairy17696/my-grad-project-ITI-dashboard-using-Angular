import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  userForm!: FormGroup;
  userModel: any;
  orderDetails: any;

  constructor(private api: OrdersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllOrderDetails();
  }

  getAllOrderDetails() {
    this.api.getAllOrders().subscribe(
      (res) => {
        this.orderDetails = res;
        console.log(this.orderDetails);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
