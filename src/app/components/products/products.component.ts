import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./../../app.component.css'],
})
export class ProductsComponent implements OnInit {
  
  constructor(private http: HttpClient) {}
  
  products: object[];

  ngOnInit(): void {
    this.http
      .get('https://7abtqvex.api.sanity.io/v1/data/query/products?query=*[is "product"]')
      .subscribe(data => {
        this.products = data["result"];
      });
  }
}
