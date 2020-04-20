import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentPlannedComponent } from './investment-planned/investment-planned.component';
import { InvestmentActualComponent } from './investment-actual/investment-actual.component';
import { TaxRateComponent } from './tax-rate/tax-rate.component';




@NgModule({
  declarations: [InvestmentPlannedComponent, InvestmentActualComponent, TaxRateComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
