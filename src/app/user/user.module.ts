import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveRejectLeaveComponent } from './approve-reject-leave/approve-reject-leave.component';
import { ApproveRejectsalaryComponent } from './approve-rejectsalary/approve-rejectsalary.component';
import { InvestmentactualComponent } from './investmentactual/investmentactual.component';



@NgModule({
  declarations: [ApplyLeaveComponent, ApproveRejectLeaveComponent, ApproveRejectsalaryComponent, InvestmentactualComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
