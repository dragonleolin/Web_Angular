import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoComponent } from './component/customer-info/customer-info.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { PaymentInfoComponent } from './page/checkout/payment-info/payment-info.component';
import { ReceiptInfoComponent } from './page/checkout/receipt-info/receipt-info.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { OrderFormComponent } from './page/order-form/order-form.component';
import { SuccessComponent } from './page/success/success.component';



const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'page' }, /**空白會跳轉到home */

  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      } /**空白會跳轉到home */,
      { path: 'home', component: HomeComponent },
      { path: 'orderForm', component: OrderFormComponent },
      { path: 'login', component:LoginComponent },
      { path: 'chcekout', component:CheckoutComponent },
      { path: 'chcekout/customerInfo', component:CustomerInfoComponent },
      { path: 'chcekout/paymentInfo', component:PaymentInfoComponent },
      { path: 'chcekout/receiptInfo', component:ReceiptInfoComponent },
      { path: 'success', component:SuccessComponent },


      //利用Service來存ID
      // { path: 'youtubePage/:id', component: YoutubePageComponent },
      //利用網址列的方式來存ID
      // { path: 'playerWidgets', component: PlayerWidgetsComponent },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  } /**萬用路由:隨便輸入都會到home */,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
