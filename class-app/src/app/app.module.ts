import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    FooterComponent,
    EmployeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
