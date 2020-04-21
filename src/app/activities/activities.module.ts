import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [UserDetailsComponent, ContactUSComponent, ChangePasswordComponent],
  imports: [
    CommonModule
  ]
})
export class ActivitiesModule { }
