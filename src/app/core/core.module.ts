import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

import { WrapperComponent, HeaderComponent } from './components';

@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
  ]
})
export class CoreModule { }
