import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.appointmentForm.valid) {
      console.log('Form submitted:', this.appointmentForm.value);
      
    }
  }
}
