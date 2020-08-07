import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merge-demo',
  templateUrl: './merge-demo.component.html',
  styleUrls: ['./merge-demo.component.scss'],
})
export class MergeDemoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack(): void {
    this.router.navigate([
      '/training/rxjs-demo/higher-order-observables/operators',
    ]);
  }
}
