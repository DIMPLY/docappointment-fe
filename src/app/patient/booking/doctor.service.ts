import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpClient
  ) {}

  getDoctors() {
    var doctors = this.http.get('http://40.114.127.149:5002/doctor');
    return doctors;
  }

  getSlots(id) {
    console.log(id);
    var slots = this.http.get("http://40.114.127.149:5002/slots/" + id);
    return slots
  }

}
