import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, of, Subject, from } from 'rxjs';
import { concatMap, takeUntil, map, delay } from 'rxjs/operators';

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
      listCost: new FormControl('', [])
    });
  }

  ngOnInit(): void {
    this.checkValueAction
      .pipe(
        delay(5000),
        map((e: any, index: number) => {
          this.queue[index].status = 'inProgress';
        }),
        delay(2000),
        concatMap((e: any, index: number) => this.checkValueTask(index, e)),
        map((e: any) => {
          this.queue[e.index][e.type] = true;
          this.queue[e.index].status = 'complete';
        })
      )
      .subscribe(e => console.log(e));
  }

  public onEmit(): void {
    const data = this.form.getRawValue();
    const checkStatus = {
      status: 'waiting',
      check1: false,
      check2: false,
      check3: false,
      check4: false
    };
    const hydrateData = Object.assign(data, checkStatus);
    this.queue.push(hydrateData);
    this.checkValueAction.next(hydrateData);
    // this.form.patchValue({
    //   name: '',
    //   desc: '',
    //   item: '',
    //   listCost: ''
    // });
  }

  private checkValueTask(index: number, data: any): Observable<any> {
    return from([
      { index: index, data: data, type: 'check1' },
      { index: index, data: data, type: 'check2' },
      { index: index, data: data, type: 'check3' },
      { index: index, data: data, type: 'check4' }
    ]);
  }
}
