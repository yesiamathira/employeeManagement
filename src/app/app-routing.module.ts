import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatusComponent}from './status/status.component';
import {EmployeesComponent}from './employees/employees.component';
import {MenuComponent}from './menu/menu.component';
const routes: Routes = [
  { 
    path: "status",
    component: StatusComponent
    },
     
    { 
      path: "employees",
      component: EmployeesComponent
      },
     
      { 
        path: "menu",
        component: MenuComponent
        },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
