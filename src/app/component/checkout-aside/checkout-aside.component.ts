import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-aside',
  templateUrl: './checkout-aside.component.html',
  styleUrls: ['./checkout-aside.component.scss']
})
export class CheckoutAsideComponent implements OnInit {

  cartTemp = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')):{
    cartTemp: []
  }

  total = (localStorage.getItem('total')) ? JSON.parse(localStorage.getItem('total')):{
    cartTemp: []
  }

  constructor() { }

  ngOnInit() {
    console.log('cartTemp:', this.cartTemp);

  }




}
