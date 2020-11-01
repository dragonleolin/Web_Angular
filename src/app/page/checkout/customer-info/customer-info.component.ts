import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent {
  constructor(private router: Router, private http: HttpClient) {}

  cartTemp = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')):{
    cartTemp: []
  }

  citys = ['台北市', '新北市'];

  model = new Order(18, 'Dr IQ', '0912345678', this.citys[0], '三重區五華街');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newOrder() {
    this.model = new Order(42, '', '', '');
  }

  customerOrder(): Order {
    const myOrder = new Order(
      42,
      'SkyDog',
      '0912345678',
      'Leslie Rollover',
      'test1'
    );
    console.log('My hero is called ' + myOrder.name);
    return myOrder;
  }

  //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form: any) {
  //   return form.controls.name.value + '-' + form.controls.phone.value + '-' + form.controls.city.value + '-' + form.controls.address.value; // Dr. IQ
  // }

  submit(form: any) {
    const name = form.controls.name.value;
    const phone = form.controls.phone.value;
    const city = form.controls.city.value;
    const address = form.controls.address.value;


    const url = 'http://localhost:8080/order';
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;',
    });
    const options = {
      headers,
    };
    // console.log(this.cartTemp[0].order_id , '-', phone);

    const body = JSON.stringify({
      customer: name,
      order_id: this.cartTemp[0].order_id,
      address: city + address,
      phone,
      total_price: Number(localStorage.getItem('total'))
    });

    this.http.post<any>(url, body, options).subscribe((res) => {
      console.log('customerInfo:', res);
      localStorage.removeItem('cart');
      localStorage.removeItem('total');
      this.router.navigateByUrl('home');
    });
  }
}
