import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatDemoRoutingModule } from './concat-demo-routing.module';
import { ConcatDemoComponent } from './concat-demo.component';

import { MarbleDiagramParserModule } from '../../../common/components/marble-diagram-parser/marble-diagram-parser.module';

@NgModule({
  declarations: [ConcatDemoComponent],
  imports: [CommonModule, MarbleDiagramParserModule, ConcatDemoRoutingModule],
})
export class ConcatDemoModule {}
