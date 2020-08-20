import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, of, Subject, from, merge } from 'rxjs';
import { concatMap, takeUntil, map, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-continuous-form',
  templateUrl: './continuous-form.component.html',
  styleUrls: ['./continuous-form.component.scss']
})
export class ContinuousFormComponent implements OnInit {
  private checkValueAction: Subject<any> = new Subject();

  public queue: any[] = [];

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: new FormControl('', []),
      desc: new FormControl('', []),
      item: new FormControl('', []),
      listCost: new FormControl('', []),
      status: new FormControl('waiting', []),
      check1: new FormControl(false, []),
      check2: new FormControl(false, []),
      check3: new FormControl(false, []),
      check4: new FormControl(false, [])
    });
  }

  ngOnInit(): void {
    this.checkValueAction
      .pipe(
        concatMap((e: any, index: number) => {
          this.queue[index].status = 'inProgress';
          return this.checkValueTask(index, e);
        }),
        tap((e: any) => {
          this.queue[e.index][e.type] = true;
        })
      )
      .subscribe(e => {
        console.log(e);
        if (
          this.queue[e.index].check1 &&
          this.queue[e.index].check2 &&
          this.queue[e.index].check3 &&
          this.queue[e.index].check4
        ) {
          this.queue[e.index].status = 'complete';
        }
      });
  }

  public onEmit(): void {
    const data = this.form.getRawValue();
    this.queue.push(data);
    this.checkValueAction.next(data);
    // this.form.patchValue({
    //   name: '',
    //   desc: '',
    //   item: '',
    //   listCost: ''
    // });
  }

  private checkValueTask(index: number, data: any): Observable<any> {
    console.log(index, data);
    return merge(
      of({ index: index, data: data, type: 'check1' }).pipe(delay(2000)),
      of({ index: index, data: data, type: 'check2' }).pipe(delay(1500)),
      of({ index: index, data: data, type: 'check3' }).pipe(delay(3000)),
      of({ index: index, data: data, type: 'check4' }).pipe(delay(2500))
    );
  }
}
