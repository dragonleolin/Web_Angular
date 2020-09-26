import { CheckoutAsideComponent } from './../../component/checkout-aside/checkout-aside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ReceiptInfoComponent } from './receipt-info/receipt-info.component';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CustomerInfoComponent,
    PaymentInfoComponent,
    ReceiptInfoComponent,
    CheckoutAsideComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,

  ],
})
export class CheckoutModule { }
