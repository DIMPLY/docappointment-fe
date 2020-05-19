import { Injectable } from '@angular/core';
import { HttpWrapper } from './httpwrapper';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpWrapper
  ) {}

  getDoctors() {
    return this.http.get('doctor');
  }

  getSlots(id) {
    //console.log(id);
    return this.http.get("slots/" + id);
  }

  bookAppointment(formElements) {
    //TODO: validate data before posting.
    const httpParams = {
      doctorid: formElements.doctorid,
      patientid: formElements.patientid,
      date: formElements.date,
      start: formElements.start,
      end: formElements.end
    };
    return this.http.post('appointment', httpParams);
  }

}
