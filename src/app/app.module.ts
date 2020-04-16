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
import { MatDividerModule,MatInputModule, MatFormFieldModule, MatTableModule, MatIconModule, MatDrawer,MatDrawerContent,MatDrawerContainer } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
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
    SalaryComponent,
    SalaryStatusRootComponent,
    LeaverootComponent,
    CreateEmployeeComponent,
    UploadExcelComponent,
    UpdateEmployeeComponent,
    MatDrawer,
    MatDrawerContent,
    MatDrawerContainer
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
