import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { ProductDetail } from 'src/app/productDetail';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProduct:ProductDetail;
  productId:number;
  productName:string;
  productPrice:number;
  productUnit:string;
  productImgPath:string;

  constructor(
    private apiService:ApiService,
  ) { }

  ngOnInit() {
    this.addCart();

  }

  addCart(){
    this.apiService.setProductDetail$.subscribe(res=>{
      console.log('res:',res);

      this.productId = res.id;
      this.productName = res.name;
      this.productPrice = res.price;
      this.productUnit = res.unit;
      this.productImgPath = res.imgPath;
      for (let i in res){
        console.log(i,':',res[i]);
      }
  });

    // console.log('this.productId:',this.productId);
    // console.log('this.productName:',this.productName);
    // console.log('this.productPrice:',this.productPrice);
    // console.log('this.productUnit:',this.productUnit);
    // console.log('this.productImgPath:',this.productImgPath);
  }

}
