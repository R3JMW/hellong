import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('./training/training.module').then((m) => m.TrainingModule),
  },
  {
    path: 'merge-demo',
    loadChildren: () =>
      import(
        './training/rxjs-demo/higher-order-observables/demos/merge-demo/merge-demo.module'
      ).then((m) => m.MergeDemoModule),
  },
  {
    path: 'switch-demo',
    loadChildren: () =>
      import(
        './training/rxjs-demo/higher-order-observables/demos/switch-demo/switch-demo.module'
      ).then((m) => m.SwitchDemoModule),
  },
  {
    path: 'concat-demo',
    loadChildren: () =>
      import(
        './training/rxjs-demo/higher-order-observables/demos/concat-demo/concat-demo.module'
      ).then((m) => m.ConcatDemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
