import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class FundamentalsComponent implements AfterViewInit {
  @ViewChild('action', { read: ElementRef, static: false })
  private actionBtn: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.actionBtn.nativeElement, 'click').subscribe(e => console.log(e));
  }

  public onAction(): void {
    of(1)
      .pipe(map(e => of(e)))
      .subscribe(r => {
        console.log(r);
        r.subscribe(subR => console.log(subR));
      });
  }
}
