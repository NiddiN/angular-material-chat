import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '@services';
import { Message } from '@interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input() message: Message;
  @Output() emitMessageToRemove = new EventEmitter<Message>();
  @Output() emitMessageToEdit = new EventEmitter<Message>();

  constructor(private userService: UserService) { }

  public removeMessage(): void {
    this.emitMessageToRemove.emit(this.message);
  }

  public editMessage(): void {
    this.emitMessageToEdit.emit(this.message);
  }

  public isCurrentUser(): boolean {
    return this.userService.username === this.message.author;
  }
}
