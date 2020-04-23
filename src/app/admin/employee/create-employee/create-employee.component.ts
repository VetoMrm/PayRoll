import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  formGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.formGroup= this.fb.group({
      employeeName:[null, [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      empnameadhar:[null,[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]]
       }); 
  }

  get employeeName(){
    return this.formGroup.get('employeeName');
  }
  get empnameadhar(){
    return this.formGroup.get('empnameadhar');
  }
}
