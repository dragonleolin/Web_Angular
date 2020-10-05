import { ProductDetail } from './productDetail';
import { HostListener, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cartTemp = [];
  productDatas = [];
  showPageList = [];
  pageNo = 1; //当前页码
  preShow = false; //上一页
  nextShow = true; //下一页
  pageSize = 6; //单页显示数
  totalPage = 0; //总页数
  pageSizes = [];
  curPage = 1; //当前页

  constructor(private http: HttpClient) {}

  send() {
    this.http
      .get('http://localhost:8080/allProductQuery', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .subscribe({
        next(value) {
          console.log('value', value);
        },
        error(error) {
          console.log('error', error);
        },
        complete() {
          console.log('success');
        },
      });
  }

  // getFeaturedPlaylist() {
  //   return this.http
  //     .get('https://api.kkbox.com/v1.1/featured-playlist-categories?territory=TW&limit=10', {
  //       headers: {
  //         Authorization: `Bearer ` + this.token,
  //       },
  //     }).subscribe(value=>{
  //       console.log('getFeaturedPlaylist',value);

  //     })
  // }

  setCartDetail(
    id: number,
    name: string,
    price: number,
    unit: string,
    imgPath: string,
  ) {
    const cartData = {
      id: id,
      name: name,
      price: price,
      unit: unit,
      imgPath: imgPath,
      qty: 1,
    };

    if (localStorage.getItem('cart')) {
      this.cartTemp = JSON.parse(localStorage.getItem("cart"));
    }

    this.cartTemp.push(cartData);
    // console.log('this.cartTemp:',this.cartTemp );

    localStorage.setItem('cart', JSON.stringify(this.cartTemp));
    // console.log('已設定', cartData);
    // this.setProductDetail$.next(cartData);
  }

  //取得所有產品資料
  getAllProduct = () => {
    return this.http.get('http://localhost:8080/allProductQuery', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  };

  //資料分頁
  getPageList(productDatas,pageSizes) {
    this.productDatas = productDatas;
    this.pageSizes = pageSizes;
    this.totalPage = Math.round(productDatas.length / this.pageSize);
    if (productDatas.length >= 1) {
      if (productDatas.length % this.pageSize === 0) {
        this.pageNo = Math.floor(productDatas.length / this.pageSize);
        // console.log('this.pageNo1:', this.pageNo);
      } else {
        this.pageNo = Math.floor(productDatas.length / this.pageSize) + 1;
        // console.log('this.pageNo2:', this.pageNo);
      }
      if (this.pageNo < this.curPage) {
        this.curPage = this.curPage - 1;
      }
      if (this.pageNo === 1 || this.curPage === this.pageNo) {
        this.preShow = this.curPage !== 1;
        // console.log('this.preShow1:', this.preShow);
        this.nextShow = false;
      } else {
        this.preShow = this.curPage !== 1;
        // console.log('this.preShow2:', this.preShow);
        this.nextShow = true;
      }
    } else {
      productDatas.length = 0;
      this.pageNo = 1;
      this.curPage = 1;
    }
    this.showPageList = productDatas.slice((this.curPage - 1) * this.pageSize, (this.curPage) * this.pageSize);
    // console.log('this.showPageList:', this.showPageList);
    this.gotoTop();
  }

    //点击上一页方法
    showPrePage() {
      this.curPage -= 1;
      if (this.curPage >= 1) {
        this.getPageList(this.productDatas, this.pageSizes);
      } else {
        this.curPage = 1;
      }
    }
    //点击下一页方法
    showNextPage() {
      this.curPage += 1;
      // console.log('showNextPage:', this.curPage);

      if (this.curPage <= this.pageNo) {
        this.getPageList(this.productDatas, this.pageSizes);
      } else {
        this.curPage = this.pageNo;
      }
    }

    //自定义跳页方法
    onChangePage(value) {
      if (value > this.pageNo) {
        confirm('超出最大页数');
      } else if (value <= 0) {
        this.curPage = 1;
        this.getPageList(this.productDatas, this.pageSizes);
      } else {
        this.curPage = value;
        this.getPageList(this.productDatas, this.pageSizes);
      }
    }
    //改变每页显示方法
    onChangePageSize(value) {
      this.pageSize = value;
      this.curPage = 1;
      this.getPageList(this.productDatas, this.pageSizes);
    }



  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



}
