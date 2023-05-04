import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userDetails: any;

  constructor(private api: UsersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllUserDetails();
  }

  getAllUserDetails() {
    this.api.getAllUsers().subscribe(
      (res) => {
        this.userDetails = res;
        console.log(this.userDetails);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteUserDetail(id: any) {
    this.api.deleteUser(id).subscribe(
      (res) => {
        alert('deleted successfully');
        this.getAllUserDetails();
      },
      (err) => {
        alert('Failed to delete student information');
      }
    );
  }
}
