import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  deleteDoctor(id) {
    return this.http.delete('http://40.114.127.149:5002/doctor?roleid=' + id);
  }

  addDoctor(firstname, lastname) {
    let httpParams = {
      firstname: firstname,
      lastname: lastname
    };
    let res = this.http.post('http://40.114.127.149:5002/doctor', httpParams);//?firstname=' + firstname + '&lastname=' + lastname);
    return res;
  }

}
