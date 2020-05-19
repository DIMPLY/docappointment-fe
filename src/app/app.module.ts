import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DoctorService} from "./doctor.service";
import {HttpWrapper} from "./httpwrapper";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpWrapper
    HttpClientModule
    //ReactiveFormsModule
  ],
  providers: [DoctorService, HttpWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
