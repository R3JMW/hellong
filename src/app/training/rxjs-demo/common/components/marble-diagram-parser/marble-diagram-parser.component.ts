import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marble-diagram-parser',
  templateUrl: './marble-diagram-parser.component.html',
  styleUrls: ['./marble-diagram-parser.component.scss'],
})
export class MarbleDiagramParserComponent implements OnInit {
  @Input('start')
  public start: number;

  @Input('step')
  public step: number = 50;

  @Input('observables')
  public observables: any[][] = [];

  @Input('operator')
  public operator: string;

  @Input('resultObservable')
  public resultObservable: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  calPosition(trigger: number): any {
    return { left: ((trigger - this.start) / 1000) * this.step + 'px' };
  }
}
