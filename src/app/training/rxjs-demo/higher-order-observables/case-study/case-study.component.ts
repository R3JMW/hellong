import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Subject, interval } from 'rxjs';
import { switchMap, mapTo, take, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('daterange', { read: ElementRef, static: false })
  private daterange: ElementRef;

  @ViewChild('startdate', { read: ElementRef, static: false })
  private startdate: ElementRef;

  @ViewChild('enddate', { read: ElementRef, static: false })
  private enddate: ElementRef;

  @ViewChild('input', { read: ElementRef, static: false })
  private input: ElementRef;

  private readonly defaultOptions: DatepickerOptions = {
    orientation: 'auto right',
    keyboardNavigation: false,
    forceParse: false,
    autoclose: true
  };

  private changeDateSubject: Subject<any> = new Subject();

  public inputContent: string;

  constructor() {}

  ngOnInit(): void {
    this.changeDateSubject
      // .pipe(switchMap(e => interval(500).pipe(take(1), mapTo(e))))
      // .pipe(debounceTime(500))
      .subscribe(() =>
        console.log(
          'subject',
          $(this.startdate.nativeElement).datepicker('getDate'),
          $(this.enddate.nativeElement).datepicker('getDate')
        )
      );
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'onchange').subscribe((e: any) => {
      console.log(e);
      this.inputContent = e;
    });
    // bootstrap-datepicker
    $(this.daterange.nativeElement).datepicker('updateDates');
    $(this.startdate.nativeElement).datepicker(this.defaultOptions);
    $(this.enddate.nativeElement).datepicker(this.defaultOptions);
    // Init event
    fromEvent($(this.startdate.nativeElement), 'changeDate').subscribe((e: any) => {
      console.log('startdate', e.date);
      this.changeDateSubject.next(e);
    });
    fromEvent($(this.enddate.nativeElement), 'changeDate').subscribe((e: any) => {
      console.log('enddate', e.date);
      this.changeDateSubject.next(e);
    });
  }

  ngOnDestroy(): void {
    this.changeDateSubject.unsubscribe();
  }
}
