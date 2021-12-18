import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { MessagesComponentComponent } from './messages/messages-component/messages-component.component';
import { AppRoutingModule } from './app-routing.module';
import { SendmailComponent } from './sendmail/sendmail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    FooterComponent,
    EmployeDetailsComponent,
    MessagesComponentComponent,
    SendmailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
