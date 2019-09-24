import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    //console.log(id);
    var slots = this.http.get("http://40.114.127.149:5002/slots/" + id);
    return slots
  }

  bookAppointment(formElements) {
    var httpParams = {
      doctorid: formElements.doctorid,
      patientid: 'b1aab4d3-3680-36e3-97ed-a44071176a15',
      date: formElements.date,
      start: formElements.start,
      end: formElements.end
    };
    return this.http.post('http://40.114.127.149:5002/appointment', httpParams);
  }

}
