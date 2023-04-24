import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GigsService } from 'src/app/services/gigs.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css'],
})
export class GigsComponent implements OnInit {
  userForm!: FormGroup;
  userModel: any;
  GigDetails: any;

  constructor(private api: GigsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllGigDetails();
  }

  getAllGigDetails() {
    this.api.getAllGigs().subscribe(
      (res) => {
        this.GigDetails = res;
        console.log(this.GigDetails);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteGigDetail(id: any) {
    this.api.deleteGig(id).subscribe(
      (res) => {
        alert('deleted successfully');
        this.getAllGigDetails();
      },
      (err) => {
        alert('Failed to delete student information');
      }
    );
  }

  reset() {
    this.userForm.reset();
    this.userModel = {};
  }
}
