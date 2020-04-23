import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login/login.component';
import { DefaultComponent } from './layouts/default/default/default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module'
import { MatInputModule, MatFormFieldModule, MatTableModule, MatIconModule, MatDrawer,MatDrawerContent,MatDrawerContainer } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule, MatDivider } from '@angular/material/divider'
import { from } from 'rxjs';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeerootComponent } from './admin/employee/employeeroot/employeeroot.component';
import { InvestmentActualComponent } from './admin/investment-actual/investment-actual.component';
import { InvestmentPlannedComponent } from './admin/investment-planned/investment-planned.component';
import { TaxRateComponent } from './admin/tax-rate/tax-rate.component';
import { SalaryStatusRootComponent } from './admin/salary-status/salary-status-root/salary-status-root.component';
import { LeaverootComponent } from './admin/leave-management/leaveroot/leaveroot.component';
import { CreateEmployeeComponent } from './admin/employee/create-employee/create-employee.component';
import { UploadExcelComponent } from './admin/employee/upload-excel/upload-excel.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { ApprovedSalaryComponent } from './admin/salary-status/approved-salary/approved-salary.component';
import { RejectedSalaryComponent } from './admin/salary-status/rejected-salary/rejected-salary.component';
import { CreateLeaveComponent } from './admin/leave-management/create-leave/create-leave.component';
import { LeaveDetailsComponent } from './admin/leave-management/leave-details/leave-details.component';
import { SalaryRootComponent } from './admin/salary/salary-root/salary-root.component';
import { CreateSalaryComponent } from './admin/salary/create-salary/create-salary.component';
import { UpdateSalaryComponent } from './admin/salary/update-salary/update-salary.component';
import { ApplyLeaveComponent } from './user/apply-leave/apply-leave.component';
import { ApproveRejectLeaveComponent } from './user/approve-reject-leave/approve-reject-leave.component';
import { ApproveRejectsalaryComponent } from './user/approve-rejectsalary/approve-rejectsalary.component';
import { InvestmentactualComponent } from './user/investmentactual/investmentactual.component';
import { UserleaveRootComponent } from './user/leave-status/userleave-root/userleave-root.component';
import { InvestplannedComponent } from './user/investplanned/investplanned.component';
import { AppLeaveComponent } from './user/leave-status/app-leave/app-leave.component';
import { RejLeaveComponent } from './user/leave-status/rej-leave/rej-leave.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard/userdashboard.component';
import { UserDetailsComponent } from './activities/user-details/user-details.component';
import { ContactUSComponent } from './activities/contact-us/contact-us.component';
import { ChangePasswordComponent } from './activities/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    LoginComponent,
    DefaultComponent,
    DashboardComponent,
    EmployeerootComponent,
    InvestmentActualComponent,
    InvestmentPlannedComponent,
    TaxRateComponent,
    SalaryStatusRootComponent,
    LeaverootComponent,
    CreateEmployeeComponent,
    UploadExcelComponent,
    UpdateEmployeeComponent,
    MatDrawer,
    MatDrawerContent,
    MatDrawerContainer,
    ApprovedSalaryComponent,
    RejectedSalaryComponent,
    CreateLeaveComponent,
    SalaryRootComponent,
    LeaveDetailsComponent,
    CreateSalaryComponent,
    UpdateSalaryComponent,
    ApplyLeaveComponent,
    ApproveRejectLeaveComponent,
    ApproveRejectsalaryComponent,
    InvestmentactualComponent,
    UserleaveRootComponent,
    AppLeaveComponent,
    RejLeaveComponent,
    InvestplannedComponent,
    UserdashboardComponent,
    UserDetailsComponent,
    ChangePasswordComponent,
    ContactUSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDividerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
