import { Injectable } from '@angular/core';
import { MessageService } from './message-service';

@Injectable({
  providedIn: 'root'
})
export class SendmailMessageService {

  logEmail(mail: string): void {
    this.messageService.add(`E-mail sent to ${mail}`)
  }

  constructor(private messageService: MessageService) { }
}
