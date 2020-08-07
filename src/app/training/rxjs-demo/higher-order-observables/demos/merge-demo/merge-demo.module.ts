import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd';

import { MergeDemoRoutingModule } from './merge-demo-routing.module';
import { MergeDemoComponent } from './merge-demo.component';

@NgModule({
  declarations: [MergeDemoComponent],
  imports: [CommonModule, NzPageHeaderModule, MergeDemoRoutingModule],
})
export class MergeDemoModule {}
