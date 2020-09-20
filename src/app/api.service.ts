import { ProductDetail } from './productDetail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // token = '7GUUFd6w1Jgz-j0wGVFElQ==';
  // private getCartData: ProductDetail = {
  //   id: null,
  //   name: '',
  //   price: null,
  //   unit: '',
  //   imgPath: ''
  // };
  cartTemp = [];
  // setProductDetail$ = new BehaviorSubject<ProductDetail>(this.getCartData);

  constructor(private http: HttpClient) {}

  send() {
    this.http
      .get('http://localhost:8080/allProductQuery', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .subscribe({
        next(value) {
          console.log('value', value);
        },
        error(error) {
          console.log('error', error);
        },
        complete() {
          console.log('success');
        },
      });
  }

  // getFeaturedPlaylist() {
  //   return this.http
  //     .get('https://api.kkbox.com/v1.1/featured-playlist-categories?territory=TW&limit=10', {
  //       headers: {
  //         Authorization: `Bearer ` + this.token,
  //       },
  //     }).subscribe(value=>{
  //       console.log('getFeaturedPlaylist',value);

  //     })
  // }

  setCartDetail(
    id: number,
    name: string,
    price: number,
    unit: string,
    imgPath: string,
  ) {
    const cartData = {
      id: id,
      name: name,
      price: price,
      unit: unit,
      imgPath: imgPath,
      qty: 1
    };

    if (localStorage.getItem('cart')) {
      this.cartTemp = JSON.parse(localStorage.getItem("cart"));
    }

    this.cartTemp.push(cartData);
    console.log('this.cartTemp:',this.cartTemp );

    localStorage.setItem('cart', JSON.stringify(this.cartTemp));
    // console.log('已設定', cartData);
    // this.setProductDetail$.next(cartData);
  }

  //取得所有產品資料
  getAllProduct = () => {
    return this.http.get('http://localhost:8080/allProductQuery', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  };
}
