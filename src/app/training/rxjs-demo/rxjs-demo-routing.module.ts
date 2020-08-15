import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsDemoComponent } from './rxjs-demo.component';
import { HigherOrderObservablesComponent } from './higher-order-observables/higher-order-observables.component';
import { FundamentalsComponent } from './higher-order-observables/fundamentals/fundamentals.component';
import { OperatorsComponent } from './higher-order-observables/operators/operators.component';
import { BestPracticesComponent } from './higher-order-observables/best-practices/best-practices.component';
import { CaseStudyComponent } from './higher-order-observables/case-study/case-study.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsDemoComponent,
    children: [
      {
        path: 'higher-order-observables',
        component: HigherOrderObservablesComponent,
        children: [
          { path: 'fundamentals', component: FundamentalsComponent },
          { path: 'operators', component: OperatorsComponent },
          { path: 'best-practices', component: BestPracticesComponent },
          { path: 'case-study', component: CaseStudyComponent },
          { path: '', redirectTo: 'fundamentals', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsDemoRoutingModule {}
