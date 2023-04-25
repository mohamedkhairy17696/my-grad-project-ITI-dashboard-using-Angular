import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
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

  deleteOrderDetail(id: any) {
    this.api.deleteOrder(id).subscribe(
      (res) => {
        alert('deleted successfully');
        this.getAllOrderDetails();
      },
      (err) => {
        alert('Failed to delete student information');
      }
    );
  }
}
