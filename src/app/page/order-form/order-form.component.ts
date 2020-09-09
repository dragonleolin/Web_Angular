import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent{

  citys = ['台北', '新北',
            '台中', '高雄'];

  model = new Order(18, 'Dr IQ', '09123456789', this.citys[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newOrder() {
    this.model = new Order(42, '', '11', '');
  }

  skyDog(): Order {
    const myOrder =  new Order(42, 'SkyDog',
                           '0921545',
                           'Leslie Rollover');
    console.log('My hero is called ' + myOrder.name); // "My hero is called SkyDog"
    return myOrder;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
