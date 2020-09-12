import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ApiService } from './api.service';
import { OrderFormComponent } from './page/order-form/order-form.component';
import { FooterComponent } from './component/footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { CustomerInfoComponent } from './component/customer-info/customer-info.component';
import { PaymentInfoComponent } from './page/checkout/payment-info/payment-info.component';
import { ReceiptInfoComponent } from './page/checkout/receipt-info/receipt-info.component';
import { SuccessComponent } from './page/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OrderFormComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    CustomerInfoComponent,
    PaymentInfoComponent,
    ReceiptInfoComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
