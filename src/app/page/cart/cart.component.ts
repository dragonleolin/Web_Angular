import { ProductDetail } from "./../../productDetail";
import { ApiService } from "./../../api.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cartTemp: ProductDetail[] = [];
  s_price = 0;
  sub_total = 0;
  total =0;
  constructor(private apiService: ApiService,private router: Router,private http: HttpClient) {}

  ngOnInit() {
    this.getCartData();
  }

  getCartData() {
    if (localStorage.getItem("cart")) {
      this.sub_total = 0;
      this.cartTemp = JSON.parse(localStorage.getItem("cart"));
      for(let i =0;i<this.cartTemp.length;i++){
        this.s_price = this.cartTemp[i]['price'] * this.cartTemp[i]['qty'];
        this.sub_total += this.s_price;
      }
    }
    this.total = this.sub_total+ 300;
  }

  deleteOne(name: string) {
    const one = this.cartTemp.findIndex(item => item.name === name);
    this.cartTemp.splice(one, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartTemp));
    this.getCartData();
  }


  addQty(name: string){
    this.cartTemp.findIndex(item => {
      if(item.name === name && item.qty <= 9){
        return item.qty += 1;
      }
    });
    localStorage.setItem("cart", JSON.stringify(this.cartTemp));
    this.getCartData();
  }
  recreaseQty(name: string){
    this.cartTemp.findIndex(item => {
      if(item.name === name && item.qty >=2){
        return item.qty -= 1;
      }
    });
    localStorage.setItem("cart", JSON.stringify(this.cartTemp));
    this.getCartData();
  }

  checkout(){
    let url = 'http://localhost:8080/orderItem';
    for(let i =0;i<this.cartTemp.length;i++){
      let body = JSON.stringify({
        qty: this.cartTemp[i]['qty'],
        order_id: 11,
        product_id: this.cartTemp[i]['id']
      })
      console.log('body:', body);

      this.http.post<any>(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body,
      options: {
        observe: 'response' as 'response',
      }
    }).subscribe(res=>{
      console.log('checkout:',res);

    });


    }
  }

}
