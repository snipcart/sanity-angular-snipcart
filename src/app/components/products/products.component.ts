import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Query } from '@angular/core/src/metadata/di';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./../../app.component.css'],
})
export class ProductsComponent implements OnInit {
  
  constructor(private http: HttpClient) {}
  
  products: object[];

  ngOnInit(): void {
    var query = "*[_type == 'product']{ name, _id, description, price, 'imageUrl': image.asset->url }";

    this.http
      .get(`https://7abtqvex.apicdn.sanity.io/v1/data/query/products?query=${query}`)
      .subscribe(data => {
        this.products = data["result"];
      });
  }
}
