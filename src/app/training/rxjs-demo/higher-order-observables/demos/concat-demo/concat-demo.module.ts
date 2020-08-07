import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatDemoRoutingModule } from './concat-demo-routing.module';
import { ConcatDemoComponent } from './concat-demo.component';


@NgModule({
  declarations: [ConcatDemoComponent],
  imports: [
    CommonModule,
    ConcatDemoRoutingModule
  ]
})
export class ConcatDemoModule { }
