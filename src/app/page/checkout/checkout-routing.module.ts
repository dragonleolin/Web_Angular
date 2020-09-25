import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ReceiptInfoComponent } from './receipt-info/receipt-info.component';


const checkoutRoutes: Routes = [
  {
    path: 'checkout',
    component:CheckoutComponent,
    children: [
      {
        path: 'customerInfo',
        component:CustomerInfoComponent,
        children: [
        { path: 'paymentInfo', component:PaymentInfoComponent },
        { path: 'receiptInfo', component:ReceiptInfoComponent },
        ],
      } ,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(checkoutRoutes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
