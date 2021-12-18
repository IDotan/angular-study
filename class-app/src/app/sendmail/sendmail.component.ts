import { Component, OnInit, Input } from '@angular/core';
import { SendmailMessageService } from '../services/sendmail-message.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css', '../employe-details/employe-details.component.css']
})
export class SendmailComponent implements OnInit {

  sendMail(mail: string): void {
    this.SendmailMessageService.logEmail(mail)
  }
  constructor(private SendmailMessageService: SendmailMessageService) { }

  ngOnInit(): void {
  }
  @Input() mail?: string
}
