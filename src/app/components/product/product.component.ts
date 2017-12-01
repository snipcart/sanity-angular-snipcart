import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
  styleUrls: ['./../../app.component.css'],
})
export class ProductComponent implements OnInit {
  
  constructor(
      private http: HttpClient,
      private route: ActivatedRoute) {}
  
  product: object;

  setProduct(id): void {
    var query = encodeURIComponent(
      `*[_id == '${id}']{ name, _id, description, price, 'imageUrl': image.asset->url }`
    );

    this.http
        .get(`https://7abtqvex.apicdn.sanity.io/v1/data/query/products?query=${query}`)
        .subscribe(data => {
            this.product = data["result"][0];
        });
  }

  ngOnInit(): void {
    this.route.url
        .subscribe(curr => {
            this.setProduct(curr[1].path);
        })
  }
}
