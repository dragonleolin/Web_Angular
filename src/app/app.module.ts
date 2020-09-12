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
import { SuccessComponent } from './page/success/success.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { ProductListComponent } from './page/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OrderFormComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    SuccessComponent,
    CheckoutComponent,
    ProductListComponent
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
