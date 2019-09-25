import { Component, OnInit } from '@angular/core';
import { AppointmentService } from "./appointment.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.less']
})
export class DoctorComponent implements OnInit {

  appointments: any = []

  constructor(
    private appointService: AppointmentService
  ) { }

  ngOnInit() {
    this.appointService
      .getAllForRole('doctor', 'fbb86113-f4dc-3be6-b438-de89d5f91036')
      .subscribe((data) => this.appointments = data);
  }

}
