import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productDatas: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.apiService.getAllProduct().subscribe((value) => {
      this.productDatas = [value];
      this.productDatas = this.productDatas[0];

      // console.log('this.productDatas', this.productDatas);
    });
  }

  addCart(
    id: number,
    name: string,
    price: number,
    unit: string,
    imgPath: string
  ) {
    // console.log('addCart:', imgPath);

    this.apiService.setCartDetail(id, name, price, unit, imgPath);
    this.router.navigateByUrl('cart');
  }
}
