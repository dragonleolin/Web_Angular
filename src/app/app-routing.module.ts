import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./page/cart/cart.component";
import { HomeComponent } from "./page/home/home.component";
import { LoginComponent } from "./page/login/login.component";
import { OrderFormComponent } from "./page/order-form/order-form.component";
import { SuccessComponent } from "./page/success/success.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  // { path: "orderForm", component: OrderFormComponent },
  {
    path: "checkout",
    loadChildren: () =>
      import("./page/checkout/checkout.module").then((m) => m.CheckoutModule),
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
