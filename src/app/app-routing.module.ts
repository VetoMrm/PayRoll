import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default/default.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeerootComponent } from './admin/employee/employeeroot/employeeroot.component';
import { InvestmentActualComponent } from './admin/investment-actual/investment-actual.component';
import { InvestmentPlannedComponent } from './admin/investment-planned/investment-planned.component';
import { TaxRateComponent } from './admin/tax-rate/tax-rate.component';
import { SalaryComponent } from './admin/salary/salary.component';
import { SalaryStatusRootComponent } from './admin/salary-status/salary-status-root/salary-status-root.component';
import { LeaverootComponent } from './admin/leave-management/leaveroot/leaveroot.component';
import { CreateEmployeeComponent } from './admin/employee/create-employee/create-employee.component';
import { UploadExcelComponent } from './admin/employee/upload-excel/upload-excel.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [{ path:'',component:LoginComponent},
{  path: 'default', component:DefaultComponent , children:[
{  path: 'dashboard', component:DashboardComponent},
{ path: 'employee',component:EmployeerootComponent},
{ path:'addEmployee',component:CreateEmployeeComponent},
{ path:'uploadexcel',component:UploadExcelComponent},
{ path:'upDelEmp',component:UpdateEmployeeComponent},
{ path: 'investplanned',component:InvestmentPlannedComponent},
{ path: 'investactual',component: InvestmentActualComponent},
{ path: 'taxrate',component:TaxRateComponent},
{ path: 'salary',component:SalaryComponent},
{ path: 'salarystatus',component:SalaryStatusRootComponent},
{ path: 'leavemanage',component:LeaverootComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
