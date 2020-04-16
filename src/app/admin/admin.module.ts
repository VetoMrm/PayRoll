import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentPlannedComponent } from './investment-planned/investment-planned.component';
import { InvestmentActualComponent } from './investment-actual/investment-actual.component';
import { TaxRateComponent } from './tax-rate/tax-rate.component';
import { SalaryComponent } from './salary/salary.component';
import { CreateSalaryComponent } from './salary/create-salary/create-salary.component';
import { UpdateSalaryComponent } from './salary/update-salary/update-salary.component';



@NgModule({
  declarations: [InvestmentPlannedComponent, InvestmentActualComponent, TaxRateComponent, SalaryComponent, CreateSalaryComponent, UpdateSalaryComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
