import { ProductDetail } from "./../../productDetail";
import { ApiService } from "./../../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cartProduct: ProductDetail;
  cartTemp = [];
  productId: number;
  productName: string;
  productPrice: number;
  productUnit: string;
  productImgPath: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.addCart();
    console.log('this.cartTemp',this.cartTemp);


  }

  addCart() {
    this.apiService.setProductDetail$.subscribe((res) => {
      console.log("res:", res);
      const temp: ProductDetail = {
        id: res.id,
        name: res.name,
        price: res.price,
        unit: res.unit,
        imgPath: res.imgPath,
      };
      this.cartTemp.push(temp);
    });

    // console.log('this.productId:',this.productId);
    // console.log('this.productName:',this.productName);
    // console.log('this.productPrice:',this.productPrice);
    // console.log('this.productUnit:',this.productUnit);
    // console.log('this.productImgPath:',this.productImgPath);
  }
}
