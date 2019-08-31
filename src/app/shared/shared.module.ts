import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatCardModule, MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
