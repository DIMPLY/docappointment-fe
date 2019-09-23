import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { BookingComponent } from './booking/booking.component';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [PatientComponent, BookingComponent, RecordComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule
  ],
  
})
export class PatientModule { }
