import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http: HttpClient
  ) {}

  getAllForRole(role, id) {
    return this.http.get('http://40.114.127.149:5002/appointment/' + role + '?roleid=' + id);
  }

  getSpecialDocPat(doctorid, patientid) {
    return this.http.get('http://40.114.127.149:5002/appointment?doctorid=' + doctorid + '&patientid=' + patientid);
  }

}
