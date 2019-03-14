import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = EMPLOYEES;
  employee:Employee = {id:0 , name:"" ,email:"" ,phone:0 , address:""};
  selectedEmployee: Employee;
  
  addEmployee(){

    if(this.employee.name.length>0 && this.employee.email.length>0){
     this.employee.id=this.employees.length+1;
     this.employees.push(this.employee);
    }
    else{
      alert("added");
    }
  }
//  removeCustomer(num)
//  {
// var customerList:Customer[]=[];
// for(var i=0;i<this.customers.length;i++)
//      {
//       if(this.customers[i].id!=num)
//      {
//        customerList.push(this.customers[i]);
//      }
//      }
// this.customers=customerList;
// }
constructor() { }
  ngOnInit() {
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
}
}