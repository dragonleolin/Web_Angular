import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSectionRoutingModule } from './product-section-routing.module';
import { ProductSectionComponent } from './product-section.component';


@NgModule({
  declarations: [ProductSectionComponent],
  imports: [
    CommonModule,
    ProductSectionRoutingModule
  ]
})
export class ProductSectionModule { }
