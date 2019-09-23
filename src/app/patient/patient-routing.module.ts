import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RecordComponent } from './record/record.component';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'record', component: RecordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
