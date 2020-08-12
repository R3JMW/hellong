import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, interval } from 'rxjs';
import { take, map, tap, mergeMap, concatMap, switchMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-merge-demo',
  templateUrl: './merge-demo.component.html',
  styleUrls: ['./merge-demo.component.scss']
})
export class MergeDemoComponent implements OnInit {
  public mergeObservables: any[] = [[], []];
  public concatObservables: any[] = [[], []];
  public switchObservables: any[] = [[], []];

  public mergeResultObservable: any[] = [];
  public concatResultObservable: any[] = [];
  public switchResultObservable: any[] = [];

  public mergeStart: number;
  public concatStart: number;
  public switchStart: number;

  private outer(period: number): Observable<any> {
    return interval(period).pipe(
      map(e => {
        return { TDOA: new Date().getTime(), result: e };
      }),
      take(3)
    );
  }

  private inner(period: number): Observable<any> {
    // Ignore Prettier
    const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    return interval(period).pipe(
      map(e => {
        return { TDOA: new Date().getTime(), result: letters[e] };
      }),
      take(5)
    );
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack(): void {
    this.router.navigate(['/training/rxjs-demo/higher-order-observables/operators']);
  }

  onAction(type: 'mergeMap' | 'concatMap' | 'switchMap'): void {
    switch (type) {
      case 'mergeMap':
        this.mergeMapAction();
        break;
      case 'concatMap':
        this.concatMapAction();
        break;
      case 'switchMap':
        this.switchMapAction();
    }
  }

  private mergeMapAction(): void {
    this.mergeObservables = [[], []];
    this.mergeResultObservable = [];
    this.mergeStart = new Date().getTime();
    this.outer(300)
      .pipe(
        tap(e => this.mergeObservables[0].push(e)),
        mergeMap(e =>
          this.inner(1000).pipe(
            map(o => {
              return { TDOA: o.TDOA, result: e.result + o.result };
            }),
            tap(e => this.mergeObservables[1].push(e))
          )
        )
      )
      .subscribe(e => this.mergeResultObservable.push({ TDOA: e.TDOA, result: e.result }));
  }

  private concatMapAction(): void {
    this.concatObservables = [[], []];
    this.concatResultObservable = [];
    this.concatStart = new Date().getTime();
    this.outer(1000)
      .pipe(
        // map(() => this.inner),
        // mergeAll()
        tap(e => this.concatObservables[0].push(e)),
        concatMap(e =>
          this.inner(300).pipe(
            map(o => {
              return { TDOA: o.TDOA, result: e.result + o.result };
            }),
            tap(e => this.concatObservables[1].push(e))
          )
        )
      )
      .subscribe(e => this.concatResultObservable.push({ TDOA: e.TDOA, result: e.result }));
  }

  private switchMapAction(): void {
    this.switchObservables = [[], []];
    this.switchResultObservable = [];
    this.switchStart = new Date().getTime();
    this.outer(400)
      .pipe(
        // map(() => this.inner),
        // mergeAll()
        tap(e => this.switchObservables[0].push(e)),
        switchMap(e =>
          this.inner(1000).pipe(
            map(o => {
              return { TDOA: o.TDOA, result: e.result + o.result };
            }),
            tap(e => this.switchObservables[1].push(e))
          )
        )
      )
      .subscribe(e => this.switchResultObservable.push({ TDOA: e.TDOA, result: e.result }));
  }
}
