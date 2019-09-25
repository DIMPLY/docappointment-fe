import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { AppointmentService } from "./appointment.service";


@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ],
  providers: [ AppointmentService ]
})
export class DoctorModule { }
