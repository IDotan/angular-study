import { Component, OnInit } from '@angular/core';
import { Employes } from './employes';
import { EMPLOYES } from '../list_employes';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employes = EMPLOYES;
  selected_employee?: Employes;
  onSelect(employe: Employes): void {
    this.selected_employee = employe;
  }
}
