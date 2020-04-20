import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSalaryComponent } from './create-salary/create-salary.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { SalaryRootComponent } from './salary-root/salary-root.component';



@NgModule({
  declarations: [CreateSalaryComponent, UpdateSalaryComponent, SalaryRootComponent],
  imports: [
    CommonModule
  ]
})
export class SalaryModule { }
