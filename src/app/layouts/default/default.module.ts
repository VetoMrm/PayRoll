import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { DefaultComponent } from './default/default.component';
import { MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DummyComponent } from 'src/app/dummy/dummy.component';
import { LoginComponent } from 'src/app/login/login/login.component';


@NgModule({
  declarations: [
  DefaultComponent,
  DummyComponent,
LoginComponent],
  imports: [    
    CommonModule,
    RouterModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DefaultModule { }
