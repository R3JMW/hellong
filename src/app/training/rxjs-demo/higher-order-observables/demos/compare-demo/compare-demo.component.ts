import { Component, OnDestroy } from '@angular/core';

import { map, tap, mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs/operators';

import { MockObservablesService } from './common/services/mock-observables.service';

@Component({
  selector: 'app-compare-demo',
  templateUrl: './compare-demo.component.html',
  styleUrls: ['./compare-demo.component.scss'],
  providers: [MockObservablesService]
})
export class CompareDemoComponent implements OnDestroy {
  public mergeObservables: any[] = [[], []];
  public concatObservables: any[] = [[], []];
  public switchObservables: any[] = [[], []];
  public exhaustObservables: any[] = [[], []];

  public mergeResultObservable: any[] = [];
  public concatResultObservable: any[] = [];
  public switchResultObservable: any[] = [];
  public exhaustResultObservable: any[] = [];

  public mergeStart: number;
  public concatStart: number;
  public switchStart: number;
  public exhaustStart: number;

  constructor(private mockObservables: MockObservablesService) {}

  onAction(type: 'mergeMap' | 'concatMap' | 'switchMap' | 'exhaustMap'): void {
    switch (type) {
      case 'mergeMap':
        this.mergeMapAction();
        break;
      case 'concatMap':
        this.concatMapAction();
        break;
      case 'switchMap':
        this.switchMapAction();
        break;
      case 'exhaustMap':
        this.exhaustMapAction();
        break;
    }
  }

  private mergeMapAction(): void {
    this.mergeObservables = [[], []];
    this.mergeResultObservable = [];
    this.mergeStart = new Date().getTime();
    this.mockObservables
      .emitNumber(1200)
      .pipe(
        tap(e => this.mergeObservables[0].push(e)),
        mergeMap(e =>
          this.mockObservables.emitLetter(700).pipe(
            tap(e => this.mergeObservables[1].push(e)),
            map(o => {
              return { TDOA: o.TDOA, result: e.result + o.result };
            })
          )
        )
      )
      .subscribe(e => this.mergeResultObservable.push({ TDOA: e.TDOA, result: e.result }));
  }

  private concatMapAction(): void {
    this.concatObservables = [[], []];
    this.concatResultObservable = [];
    this.concatStart = new Date().getTime();
    this.mockObservables
      .emitNumber(1200)
      .pipe(
        tap(e => this.concatObservables[0].push(e)),
        concatMap(e =>
          this.mockObservables.emitLetter(700).pipe(
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
    this.mockObservables
      .emitNumber(1200)
      .pipe(
        // map(() => this.inner),
        // mergeAll()
        tap(e => this.switchObservables[0].push(e)),
        switchMap(e =>
          this.mockObservables.emitLetter(700).pipe(
            map(o => {
              return { TDOA: o.TDOA, result: e.result + o.result };
            }),
            tap(e => this.switchObservables[1].push(e))
          )
        )
      )
      .subscribe(e => this.switchResultObservable.push({ TDOA: e.TDOA, result: e.result }));
  }

  private exhaustMapAction(): void {
    this.exhaustObservables = [[], []];
    this.exhaustResultObservable = [];
    this.exhaustStart = new Date().getTime();
    this.mockObservables
      .emitNumber(1500)
      .pipe(
        // map(() => this.inner),
        // mergeAll()
        tap(e => this.exhaustObservables[0].push(e)),
        exhaustMap(e =>
          this.mockObservables.emitLetter(500).pipe(
            map(o => {
              return { TDOA: o.TDOA, result: e.result + o.result };
            }),
            tap(e => this.exhaustObservables[1].push(e))
          )
        )
      )
      .subscribe(e => this.exhaustResultObservable.push({ TDOA: e.TDOA, result: e.result }));
  }

  ngOnDestroy(): void {}
}
