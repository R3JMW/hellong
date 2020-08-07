import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeDemoComponent } from './merge-demo.component';

const routes: Routes = [{ path: '', component: MergeDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MergeDemoRoutingModule {}
