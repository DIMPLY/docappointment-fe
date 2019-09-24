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
  slots: any = [];
  days = [];
  none_checked = true;

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

  doctorChanged(event, item) {
    this.doctorService.getSlots(event.target.value).subscribe(slots => {
      console.log(slots);
      this.slots = slots;
      this.days = slots[0].occupation;
    });
  }

  calendarChange(event) {
    console.log(event)
    if(event.none_checked) {
      this.slots.forEach((slot, i) => {
        for(let _date in slot.occupation){
          if (slot.occupation[_date] != 1){
            slot.occupation[_date] = 0;
          }
        }
      });
    } else {
      var idx = event.slotidx;
      var date = event.date;
      var preslot = idx > 0 && this.slots[idx - 1].occupation;
      var nxtslot = idx < this.slots.length-1 && this.slots[idx + 1].occupation;
      if (event.checked) {
        if (this.none_checked) { // check the first slot
          this.slots.forEach((slot, i) => {
            for (let _date in slot.occupation) {
              if ((_date != date || Math.abs(idx - i) > 1) && slot.occupation[_date] != 1) slot.occupation[_date] = 2;
            }
          });
        } else { // check a follow-up slot
          if (preslot) {
            if (preslot[date] == 2) {
              preslot[date] = 0;
            } else if (preslot[date] == 0 && idx > 1 && event.prepre_checked) {
              preslot[date] = 2;
            }
          }
          if (nxtslot) {
            if (nxtslot[date] == 2) {
              nxtslot[date] = 0;
            } else if (nxtslot[date] == 0 && idx < this.slots.length-2 && event.nxtnxt_checked) {
              nxtslot[date] = 2;
            }
          }
        }
      } else { // uncheck a slot & not cleared yet
        if (preslot) {
          if (preslot[date] == 2) {
            preslot[date] = 0;
          } else if (preslot[date] == 0 && !event.pre_checked) {
            preslot[date] = 2;
          }
        }
        if (nxtslot) {
          if (nxtslot[date] == 2) {
            nxtslot[date] = 0;
          } else if (nxtslot[date] == 0 && !event.nxt_checked) {
            nxtslot[date] = 2;
          }
        }
      }
    }
    this.none_checked = event.none_checked;
  }

  submitBooking() {

  }

}
