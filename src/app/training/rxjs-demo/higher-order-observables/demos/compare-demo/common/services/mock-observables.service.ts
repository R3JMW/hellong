import { Injectable } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface MockResponseModel {
  TDOA: number;
  result: any;
}

@Injectable()
export class MockObservablesService {
  public emitNumber(period: number): Observable<MockResponseModel> {
    return interval(period).pipe(
      map(e => {
        return { TDOA: new Date().getTime(), result: e };
      }),
      take(3)
    );
  }

  public emitLetter(period: number): Observable<MockResponseModel> {
    const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    return interval(period).pipe(
      map(e => {
        return { TDOA: new Date().getTime(), result: letters[e] };
      }),
      take(5)
    );
  }
}
