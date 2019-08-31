import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
