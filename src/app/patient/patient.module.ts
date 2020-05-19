import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { BookingComponent } from './booking/booking.component';
import { RecordComponent } from './record/record.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './booking/calendar/calendar.component';
import { DoctorService } from "../doctor.service";


@NgModule({
  declarations: [PatientComponent, BookingComponent, RecordComponent, CalendarComponent, LoginComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DoctorService
  ]
})
export class PatientModule { }
