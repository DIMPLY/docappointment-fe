import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';

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

  formElements = {
    doctorid: '0',
    date: null,
    start: null,
    end: null
  };

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  doctorChanged(event) {
    this.doctorService.getSlots(event.target.value).subscribe(slots => {
      this.slots = slots;
      const firstSlotDates = slots[0].occupation;
      let days = Object.keys(firstSlotDates);
      for (const date in slots[slots.length - 1].occupation) {
        if (!firstSlotDates.hasOwnProperty(date)) {
          days.push(date);
        }
      }
      days.sort((a, b) => {
        let atriple = a.split('-');
        let btriple = b.split('-');
        if (+atriple[0] != +btriple[0]) return (+atriple[0]) - (+btriple[0]);
        if (+atriple[1] != +btriple[1]) return (+atriple[1]) - (+btriple[1]);
        return (+atriple[2]) - (+btriple[2]);
      });
      this.days = days;
      console.log(days);
      this.formElements = {
        doctorid: event.target.value,
        date: null,
        start: null,
        end: null
      };
    });
  }

  calendarChanged(event) {
    // Handle the slot status
    if (event.none_checked) {  // the last checked one has been cleared
      this.slots.forEach((slot) => {
        for (let _date in slot.occupation) {
          if (slot.occupation[_date] != 1) {
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
        }
        else { // check a follow-up slot
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

    // Handle the data to be submitted
    this.formElements.date = date;
    var addstart = this.slots[idx].slotstart;
    var addend = this.slots[idx].slotend;
    if (addstart == this.formElements.end || !this.formElements.end) {
      this.formElements.end = addend;
    }
    if (addend == this.formElements.start || !this.formElements.start) {
      this.formElements.start = addstart;
    }

  }

  submitBooking() {
    this.doctorService.bookAppointment(this.formElements).subscribe(res => {
      console.log(res);
      if (res.success) {
        alert("New appointment booked with doctor! Date: "
          + this.formElements.date + ", from " + this.formElements.start
          + " to " + this.formElements.end + ".");
        self.location.reload();
      }
    });
  }

}
