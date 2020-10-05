import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent{

  constructor() { }


  citys = ['台北', '新北'];

  model = new Order(18, 'Dr IQ','09123456789', this.citys[0], 'test');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newOrder() {
    this.model = new Order(42, '','', '');
  }

  customerOrder(): Order {
    const myOrder =  new Order(42, 'SkyDog',
                           '0912345678',
                           'Leslie Rollover', 'test1');
    console.log('My hero is called ' + myOrder.name);
    return myOrder;
  }


  //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form: any) {
  //   return form.controls.name.value + '-' + form.controls.phone.value + '-' + form.controls.city.value + '-' + form.controls.address.value; // Dr. IQ
  // }

  submit(form: any){
    const name = form.controls.name.value;
    const phone = form.controls.phone.value;
    const city = form.controls.city.value;
    const address = form.controls.address.value;

    console.log(name,'-', phone,'-',city,'-',address);




  }

}
