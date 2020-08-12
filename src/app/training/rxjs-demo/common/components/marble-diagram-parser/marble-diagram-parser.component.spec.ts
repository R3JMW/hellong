import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleDiagramParserComponent } from './marble-diagram-parser.component';

describe('MarbleDiagramParserComponent', () => {
  let component: MarbleDiagramParserComponent;
  let fixture: ComponentFixture<MarbleDiagramParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarbleDiagramParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbleDiagramParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
