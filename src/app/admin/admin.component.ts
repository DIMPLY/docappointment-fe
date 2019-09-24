import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { AdminService } from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  doctorList;
  newfirstname = '';
  newlastname = '';

  constructor(
    private doctorService: DoctorService,
    private adminService: AdminService
  ) { }

  ngOnInit( ) {
    console.log('init admin');
    this.doctorService.getDoctors().subscribe((data) => {
      this.doctorList = data;
    });
    this.newfirstname = '';
    this.newlastname = '';
  }

  deleteDoctor(i, id) {
    if (!confirm('Deleting doctor ' + this.doctorList[i].firstname + ' ' + this.doctorList[i].lastname + '?'))
      return;
    this.adminService.deleteDoctor(id).subscribe((data) => {
      if (data.success) {
        this.ngOnInit();
      }
    });
  }

  addDoctor() {
    this.adminService.addDoctor(this.newfirstname, this.newlastname).subscribe((data) => {
      if (data.success) {
        this.ngOnInit();
      }
    });
  }

}
