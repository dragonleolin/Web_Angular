import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  token = '7GUUFd6w1Jgz-j0wGVFElQ==';

  constructor(private http: HttpClient) {}


  // send() {
  //   this.http.get('http://127.0.0.1:3001/get').subscribe({
  //     next(value) {
  //       console.log('value', value);
  //     },
  //     error(error) {
  //       console.log('error', error);
  //     },
  //     complete() {
  //       console.log('success');
  //     },
  //   });
  // }



  // getToken() {
  //   this.http.post('https://account.kkbox.com/oauth2/token', {
  //     headers: {
  //       grant_type: 'client_credentials',
  //       client_id: 'f51a9213d7860d8e6bcc5aee8439ca98',
  //       client_secret: '75f63964dcfc50f48e77397515a7b19b'
  //     },
  //   }).subscribe((res) => {
  //     console.log('getToken:', res);
  //   });
  // }


  // //取得每周熱門歌曲排行封面
  // getNewHitPlayLists = () => {
  //   // console.log(1, this.token);
  //  return this.http
  //     .get('https://api.kkbox.com/v1.1/new-hits-playlists?territory=TW', {
  //       headers: {
  //         Authorization: `Bearer ` + this.token,
  //       },
  //     })
  // };



}
