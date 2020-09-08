import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  // 能力陣列
  citys = ['台北', '新北', '台中', '高雄'];
  // 預設的 model 物件
  // model = new Order(1, 'Iris', this.citys[0], 09123456789);

  // 阻止提交
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
  }

}
