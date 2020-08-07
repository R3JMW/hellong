import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatDemoComponent } from './concat-demo.component';

describe('ConcatDemoComponent', () => {
  let component: ConcatDemoComponent;
  let fixture: ComponentFixture<ConcatDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
