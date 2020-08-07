import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeDemoComponent } from './merge-demo.component';

describe('MergeDemoComponent', () => {
  let component: MergeDemoComponent;
  let fixture: ComponentFixture<MergeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
