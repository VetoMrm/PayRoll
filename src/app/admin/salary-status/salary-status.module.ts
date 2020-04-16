import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedSalaryComponent } from './approved-salary/approved-salary.component';
import { RejectedSalaryComponent } from './rejected-salary/rejected-salary.component';
import { SalaryStatusRootComponent } from './salary-status-root/salary-status-root.component';



@NgModule({
  declarations: [ApprovedSalaryComponent, RejectedSalaryComponent, SalaryStatusRootComponent],
  imports: [
    CommonModule
  ]
})
export class SalaryStatusModule { }
