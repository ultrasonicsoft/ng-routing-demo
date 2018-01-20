import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productId: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showProductDetails() {
    let route = '/dashboard/product/' + this.productId;
    this.router.navigate([route]);
  }
}
