import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  productDatas: any[] = [];

  token = '7GUUFd6w1Jgz-j0wGVFElQ==';

  constructor(
    private apiService: ApiService,
    // private router: Router
  ) {}

  ngOnInit() {
    this.apiService.send();
    this.getProduct();
    this.apiService.getFeaturedPlaylist();
  }



  getProduct(){
    this.apiService.getAllProduct().subscribe((value) => {
      this.productDatas = [value];
      console.log('this.productDatas', this.productDatas);
    });
  }
}
