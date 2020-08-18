import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Subject, interval } from 'rxjs';
import { switchMap, mapTo, take } from 'rxjs/operators';

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

  private defaultOptions: DatepickerOptions = {
    orientation: 'auto right',
    keyboardNavigation: false,
    forceParse: false,
    autoclose: true
  };

  private changeDateSubject: Subject<any> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.changeDateSubject
      .pipe(switchMap(e => interval(500).pipe(take(1), mapTo(e))))
      .subscribe(res => console.log('subject', res));
  }

  ngAfterViewInit(): void {
    $(this.daterange.nativeElement).datepicker('updateDates');
    $(this.startdate.nativeElement).datepicker(this.defaultOptions);
    $(this.enddate.nativeElement).datepicker(this.defaultOptions);
    // Init event
    fromEvent($(this.startdate.nativeElement), 'changeDate').subscribe(e => {
      console.log('startdate', e);
      this.changeDateSubject.next(e);
    });
    fromEvent($(this.enddate.nativeElement), 'changeDate').subscribe(e => {
      console.log('enddate', e);
      this.changeDateSubject.next(e);
    });
  }

  ngOnDestroy(): void {
    this.changeDateSubject.unsubscribe();
  }
}
