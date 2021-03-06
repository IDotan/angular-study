import { Component, OnInit, Input } from '@angular/core';
import { Employes } from '../employes/employes';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  formToMail: string = "";

  closeEmailForm(): void {
    this.formToMail = "";
  }

  emailForm(mail: string): void {
    this.formToMail = mail
  }
  constructor() { }

  ngOnInit(): void { }
  @Input() employee?: Employes;
}
