import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  token = '7GUUFd6w1Jgz-j0wGVFElQ==';

  constructor(private http: HttpClient) {}


  send() {
    this.http.get('http://localhost:8080/allProductQuery', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    }).subscribe({
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

  getFeaturedPlaylist() {
    return this.http
      .get('https://api.kkbox.com/v1.1/featured-playlist-categories?territory=TW&limit=10', {
        headers: {
          Authorization: `Bearer ` + this.token,
        },
      }).subscribe(value=>{
        console.log('getFeaturedPlaylist',value);

      })
  }

  //取得所有產品資料
  getAllProduct = () => {
    return this.http.get('http://localhost:8080/allProductQuery',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
      },
    });
  };
}
