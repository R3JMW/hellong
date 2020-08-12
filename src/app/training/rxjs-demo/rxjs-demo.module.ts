import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NzTagModule,
  NzTabsModule,
  NzPageHeaderModule,
  NzBreadCrumbModule,
  NzLayoutModule,
  NzButtonModule,
} from 'ng-zorro-antd';

import { RxjsDemoRoutingModule } from './rxjs-demo-routing.module';
import { RxjsDemoComponent } from './rxjs-demo.component';
import { HigherOrderObservablesComponent } from './higher-order-observables/higher-order-observables.component';

import { IconsProviderModule } from 'src/app/icons-provider.module';
import { FundamentalsComponent } from './higher-order-observables/fundamentals/fundamentals.component';
import { OperatorsComponent } from './higher-order-observables/operators/operators.component';
import { BestPracticesComponent } from './higher-order-observables/best-practices/best-practices.component';
import { CaseStudyComponent } from './higher-order-observables/case-study/case-study.component';

@NgModule({
  declarations: [
    RxjsDemoComponent,
    HigherOrderObservablesComponent,
    FundamentalsComponent,
    OperatorsComponent,
    BestPracticesComponent,
    CaseStudyComponent,
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    IconsProviderModule,
    NzTabsModule,
    NzTagModule,
    NzLayoutModule,
    NzButtonModule,
    RxjsDemoRoutingModule,
  ],
})
export class RxjsDemoModule {}
