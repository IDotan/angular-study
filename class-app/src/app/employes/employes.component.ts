import { Component, OnInit } from '@angular/core';
import { Employes } from './employes';
import { EmployeeService } from '../services/employee-service';
import { MessageService } from '../services/message-service';
import { EmployeDetailsComponent } from '../employe-details/employe-details.component';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private messageService: MessageService) { }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employes = employees);;
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  employes: Employes[] = [];
  selected_employee?: Employes;

  onSelect(employe: Employes): void {
    this.selected_employee = employe;
    this.messageService.add('Employ component: Selected employ ID #' + employe.id);
  }
}
