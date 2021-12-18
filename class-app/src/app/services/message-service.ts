import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Array<any> = [];

  add(message: string) {
    let time = new Date;
    this.messages.unshift([time.toTimeString().slice(0, 5), message]);
  }

  clear() {
    this.messages = [];
  }

  constructor() { }
}
