import { Injectable } from '@angular/core';
import { Employes } from '../employes/employes';
import { EMPLOYES } from '../list_employes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message-service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Observable<Employes[]> {
    const employees = of(EMPLOYES);
    this.messageService.add('Employee Service message: all employees were updated!');
    return employees;
  };

  constructor(private messageService: MessageService) { }
}
