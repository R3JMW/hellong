import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareDemoComponent } from './compare-demo.component';

describe('CompareDemoComponent', () => {
  let component: CompareDemoComponent;
  let fixture: ComponentFixture<CompareDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
