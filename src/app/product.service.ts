import { Injectable } from '@angular/core';
import { Product } from './product-model';

import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

import { BehaviorSubject } from "rxjs/BehaviorSubject";

const PRODUCTS = [
  new Product("one", 1),
  new Product("two", 2),
  new Product("three", 3)
]
@Injectable()
export class ProductService {

  constructor() { }



}
