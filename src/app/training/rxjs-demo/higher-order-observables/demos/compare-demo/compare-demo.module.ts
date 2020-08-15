import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd';

import { CompareDemoComponent } from './compare-demo.component';

import { MarbleDiagramParserModule } from 'src/app/training/rxjs-demo/common/components/marble-diagram-parser/marble-diagram-parser.module';

@NgModule({
  declarations: [CompareDemoComponent],
  imports: [CommonModule, NzButtonModule, MarbleDiagramParserModule],
  exports: [CompareDemoComponent]
})
export class CompareDemoModule {}
