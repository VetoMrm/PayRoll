import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserleaveRootComponent } from './userleave-root/userleave-root.component';
import { AppLeaveComponent } from './app-leave/app-leave.component';
import { RejLeaveComponent } from './rej-leave/rej-leave.component';



@NgModule({
  declarations: [UserleaveRootComponent, AppLeaveComponent, RejLeaveComponent],
  imports: [
    CommonModule
  ]
})
export class LeaveStatusModule { }
