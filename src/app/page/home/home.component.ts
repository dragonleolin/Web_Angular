import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productDatas: any[] = [];
  showPageList: any[] = [];
  pageNo = 1; //当前页码
  preShow = false; //上一页
  nextShow = true; //下一页
  totalPage = 0; //总页数
  pageSizes = [4, 8, 12];
  curPage = 1; //当前页

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getProduct();

  }

  getProduct() {
    this.apiService.getAllProduct().subscribe((value) => {
      this.productDatas = [value];
      this.productDatas = this.productDatas[0];
      // console.log('this.productDatas:', this.productDatas.length);
      this.apiService.getPageList(this.productDatas, this.pageSizes);
      this.preShow = this.apiService.preShow;
      this.pageNo = this.apiService.pageNo;
      this.curPage = this.apiService.curPage;
      this.nextShow = this.apiService.nextShow;
      this.totalPage = this.apiService.totalPage;
      this.showPageList = this.apiService.showPageList;
      console.log('this.showPageList:', this.showPageList);

    });
  }

  clickPrePage(){
    this.apiService.showPrePage();
    this.getProduct();
  }

  clickNextPage(){
    this.apiService.showNextPage();
    this.getProduct();
  }
  clickChangePage(value){
    console.log('clickChangePage:',value);

    this.apiService.onChangePage(value);
    this.getProduct();
  }

  clickchangePageSize(value){
    console.log('clickchangePageSize:',value);
    this.apiService.onChangePageSize(value);
    this.getProduct();
  }





  addCart(
    id: number,
    name: string,
    price: number,
    unit: string,
    imgPath: string
  ) {
    // console.log('addCart:', imgPath);

    this.apiService.setCartDetail(id, name, price, unit, imgPath);
    this.router.navigateByUrl('cart');
  }
}
