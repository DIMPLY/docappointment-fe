import { Injectable } from '@angular/core';
import { HttpWrapper } from '../httpwrapper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpWrapper) {
  }

  deleteDoctor(id) {
    return this.http.delete('doctor', {roleid: id});
  }

  addDoctor(firstname, lastname) {
    let httpParams = {
      firstname: firstname,
      lastname: lastname
    };
    let res = this.http.post('doctor', httpParams);
    return res;
  }

}
