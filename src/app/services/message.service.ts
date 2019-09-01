import { Injectable } from '@angular/core';
import { Message } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public addMessage(message: Message): Array<Message> {
    const messages = this.getMessages();
    messages.push(message);
    this.updateMessages(messages);
    return messages;
  }

  public removeMessage(messageToRemove: Message): Array<Message> {
    let messages = this.getMessages();
    messages = messages.filter(message => message.id !== messageToRemove.id);
    this.updateMessages(messages);
    return messages;
  }

  public updateMessage(messageToUpdate: Message): Array<Message> {
    let messages = this.getMessages();
    messages = messages.map(message => message.id === messageToUpdate.id ? messageToUpdate : message);
    this.updateMessages(messages);
    return messages;
  }

  private updateMessages(messages: Array<Message>): void {
    localStorage.setItem('chatMessages', JSON.stringify({messages}));
  }

  public getMessages(): Array<Message> {
    const storageData = JSON.parse(localStorage.getItem('chatMessages'));
    return storageData ? storageData.messages : [];
  }
}
