import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { BookingComponent } from './booking/booking.component';
import { RecordComponent } from './record/record.component';
import { CalendarComponent } from './booking/calendar/calendar.component';


@NgModule({
  declarations: [PatientComponent, BookingComponent, RecordComponent, CalendarComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ],

})
export class PatientModule { }
