import { ProductDetail } from './../../productDetail';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartTemp: ProductDetail[] = [];
  // tslint:disable-next-line: variable-name
  s_price = 0;
  // tslint:disable-next-line: variable-name
  sub_total = 0;
  total = 0;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getCartData();
  }

  getCartData() {
    if (localStorage.getItem('cart')) {
      this.sub_total = 0;
      this.cartTemp = JSON.parse(localStorage.getItem('cart'));
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.cartTemp.length; i++) {
        this.s_price = this.cartTemp[i].price * this.cartTemp[i]['qty'];
        this.sub_total += this.s_price;
      }
    }
    this.total = this.sub_total + 300;
  }

  deleteOne(name: string) {
    const one = this.cartTemp.findIndex((item) => item.name === name);
    this.cartTemp.splice(one, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartTemp));
    this.getCartData();
  }

  addQty(name: string) {
    this.cartTemp.findIndex((item) => {
      if (item.name === name && item.qty <= 9) {
        return (item.qty += 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.cartTemp));
    this.getCartData();
  }
  recreaseQty(name: string) {
    this.cartTemp.findIndex((item) => {
      if (item.name === name && item.qty >= 2) {
        return (item.qty -= 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.cartTemp));
    this.getCartData();
  }

  checkout() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.cartTemp.length; i++) {
    const urlencoded = new URLSearchParams();
    urlencoded.append('qty', `${this.cartTemp[i].qty}`);
    urlencoded.append('order_id', '15');
    urlencoded.append('product_id', `${this.cartTemp[i].id}`);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('http://localhost:8080/orderItem', requestOptions as RequestInit)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    }
    // const url = 'http://localhost:8080/orderItem';
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Type': 'application/json',
    // });
    // let options = {
    //   headers,
    // };
    // for (let i = 0; i < this.cartTemp.length; i++) {
    //   let body = {
    //     qty: this.cartTemp[i]['qty'],
    //     order_id: 15,
    //     product_id: this.cartTemp[i]['id'],
    //   };
    //   console.log('body:', body);
    //   this.http
    //     .post<any>(url, body, options)
    //     .subscribe((res) => {
    //       console.log('checkout:', res);
    //     });
    // }


  }
}
