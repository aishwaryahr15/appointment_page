import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppointmentComponent]
})
export class AppModule { }
