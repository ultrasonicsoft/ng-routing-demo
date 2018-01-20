import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('snapshot value: ' + id);
    this.activatedRoute.paramMap.subscribe(data => {
      if (data.has('id')) {
        this.productId = data.get('id');
        console.log(data.get('id'));
      }
    })
  }

}
