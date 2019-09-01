import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { UserService, MessageService } from '@services';
import { Message } from '@interfaces';

@Component({
  selector: 'app-mat-chat',
  templateUrl: './mat-chat.component.html',
  styleUrls: ['./mat-chat.component.scss'],
})
export class MatChatComponent implements AfterViewChecked {

  @ViewChild('chatContent', {static: true}) chatContent: ElementRef;

  public messages: Array<Message>;
  public inputMessageField: string;
  public messageToEdit: Message;
  private currentUserName: string;

  constructor(private userService: UserService, private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
    this.currentUserName = this.userService.username;
  }

  ngAfterViewChecked() {
    this.scrollToEnd();
  }

  public sendMessage(): void {
    if (this.messageToEdit) {
      this.editMessage();
    } else {
      this.addMessage();
    }
    this.clearInputField();
    this.scrollToEnd();
  }

  public removeMessage(messageToRemove: Message): void {
    this.messages = this.messageService.removeMessage(messageToRemove);
  }

  public setMessageToEdit(message: Message): void {
    this.messageToEdit = message;
    this.inputMessageField = message.text;
  }

  public cancelEdit(): void {
    this.messageToEdit = null;
    this.clearInputField();
  }

  public isEmptyMessage(): boolean {
    return !this.inputMessageField;
  }

  private addMessage(): void {
    const currentDate = new Date();
    this.messages = this.messageService.addMessage({
      id: currentDate.getTime() * Math.random(),
      author: this.currentUserName,
      text: this.inputMessageField,
      date: currentDate.toISOString()
    });
  }

  private editMessage(): void {
    this.messageToEdit.text = this.inputMessageField;
    this.messages = this.messageService.updateMessage(this.messageToEdit);
    this.messageToEdit = null;
  }

  private clearInputField(): void {
    this.inputMessageField = '';
  }

  private scrollToEnd(): void {
    this.chatContent.nativeElement.scrollTop = this.chatContent.nativeElement.scrollHeight;
  }
}
