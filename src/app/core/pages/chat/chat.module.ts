import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ChatComponent } from './chat.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MatChatComponent } from './components/mat-chat/mat-chat.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [ChatComponent, WrapperComponent, MatChatComponent, MessageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
  ]
})
export class ChatModule { }
