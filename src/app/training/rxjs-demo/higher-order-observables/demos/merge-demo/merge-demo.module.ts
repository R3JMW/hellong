import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule, NzButtonModule } from 'ng-zorro-antd';

import { MergeDemoRoutingModule } from './merge-demo-routing.module';
import { MergeDemoComponent } from './merge-demo.component';

import { MarbleDiagramParserModule } from 'src/app/training/rxjs-demo/common/components/marble-diagram-parser/marble-diagram-parser.module';

@NgModule({
  declarations: [MergeDemoComponent],
  imports: [CommonModule, NzPageHeaderModule, NzButtonModule, MarbleDiagramParserModule, MergeDemoRoutingModule]
})
export class MergeDemoModule {}
