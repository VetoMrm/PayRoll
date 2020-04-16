import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { LeaverootComponent } from './leaveroot/leaveroot.component';



@NgModule({
  declarations: [LeaveDetailsComponent, CreateLeaveComponent, LeaverootComponent],
  imports: [
    CommonModule
  ]
})
export class LeaveManagementModule { }
