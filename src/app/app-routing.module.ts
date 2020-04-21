import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default/default.component';
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
import { LoginComponent } from './login/login/login.component';
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
import { ChangePasswordComponent } from './activities/change-password/change-password.component';
import { ContactUSComponent } from './activities/contact-us/contact-us.component';


const routes: Routes = [{ path:'',component:LoginComponent},
{  path: 'default', component:DefaultComponent , children:[
{  path: '', component:DashboardComponent},
{ path: 'employee',component:EmployeerootComponent},
{ path:'addEmployee',component:CreateEmployeeComponent},
{ path:'uploadexcel',component:UploadExcelComponent},
{ path:'upDelEmp',component:UpdateEmployeeComponent},
{ path:'appsalary',component:ApprovedSalaryComponent},
{ path:'rejsala',component:RejectedSalaryComponent},
{ path:'creleav',component:CreateLeaveComponent},
{ path:'leavdet',component:LeaveDetailsComponent},
{ path:'cresal',component:CreateSalaryComponent},
{ path:'updsal',component:UpdateSalaryComponent},
{ path: 'investplanned',component:InvestmentPlannedComponent},
{ path: 'investactual',component: InvestmentActualComponent},
{ path: 'appleave',component: ApplyLeaveComponent},
{ path: 'taxrate',component:TaxRateComponent},
{ path: 'salary',component:SalaryRootComponent},
{ path: 'salarystatus',component:SalaryStatusRootComponent},
{ path: 'leavemanage',component:LeaverootComponent},

{ path: 'userdash',component: UserdashboardComponent},
{ path: 'appleave',component: ApplyLeaveComponent},
{ path: 'leavestat',component: UserleaveRootComponent},
{ path: 'approvleave',component: AppLeaveComponent},
{ path: 'rejectleave',component: RejLeaveComponent},
{ path: 'apprejleave',component: ApproveRejectLeaveComponent},
{ path: 'apprejsal',component: ApproveRejectsalaryComponent},
{ path: 'userinvstplanned',component: InvestplannedComponent},
{ path: 'userinvstactual',component: InvestmentactualComponent},

{ path: 'userdetails',component: UserDetailsComponent},
{ path: 'changePassword',component: ChangePasswordComponent},
{ path: 'contactUs',component: ContactUSComponent},





]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
