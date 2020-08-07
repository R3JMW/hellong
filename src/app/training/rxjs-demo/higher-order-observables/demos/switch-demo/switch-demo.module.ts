import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchDemoRoutingModule } from './switch-demo-routing.module';
import { SwitchDemoComponent } from './switch-demo.component';


@NgModule({
  declarations: [SwitchDemoComponent],
  imports: [
    CommonModule,
    SwitchDemoRoutingModule
  ]
})
export class SwitchDemoModule { }
