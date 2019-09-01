import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ChatComponent } from './chat.component';
import { WrapperComponent, MatChatComponent, MessageComponent } from './components';


@NgModule({
  declarations: [
    ChatComponent,
    WrapperComponent,
    MatChatComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
  ]
})
export class ChatModule { }
