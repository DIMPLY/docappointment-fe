import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.less']
})
export class BookingComponent implements OnInit {

  doctors;
  slots;
  viewDate;

  bookingForm = this.fb.group({
    doctorSelected: ['']
  });

  constructor(
    private doctorService: DoctorService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  doctorChanged(id) {
    this.doctorService.getSlots(id).subscribe(slots => {
      this.slots = slots;
      this.viewDate = slots[0].starttime.split()[0];
    });
  }

  submitBooking() {

  }

}
