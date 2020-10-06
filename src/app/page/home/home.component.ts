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
  pageSizes = [6, 8, 12];
  pgaes = [1];
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
      // console.log('this.showPageList:', this.showPageList);
      if(this.pgaes.length !== this.totalPage){
        for (let i = 2; i <= this.totalPage; i++){
          this.pgaes.push(i);
        }
      }
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
    // console.log('clickChangePage:',value);

    this.apiService.onChangePage(value);
    this.getProduct();
  }

  clickchangePageSize(value){
    // console.log('clickchangePageSize:',value);
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
    this.apiService.setCartDetail(id, name, price, unit, imgPath);
    this.router.navigateByUrl('cart');
  }
}
