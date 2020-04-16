import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeerootComponent } from './employeeroot/employeeroot.component';



@NgModule({
  declarations: [CreateEmployeeComponent, UploadExcelComponent, UpdateEmployeeComponent, EmployeerootComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
