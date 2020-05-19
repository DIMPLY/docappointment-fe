import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapper {

  static prefix: string = 'http://35.163.120.228:5002/';
  constructor(private http: HttpClient) {}

  delete(url, kvpairs) {
    let search = '';
    for (let [key, value] of Object.entries(kvpairs)) {
      search += `&${key}=${value}`;
    }
    if (search.length > 0) search = search.slice(1);
    return this.http.delete(HttpWrapper.prefix + url + '?' + search);
  }

  post(url, httpParams) {
    let res = this.http.post(HttpWrapper.prefix + url, httpParams);
    return res;
  }

  get(url) {
    return this.http.get(HttpWrapper.prefix + url);
  }
}
