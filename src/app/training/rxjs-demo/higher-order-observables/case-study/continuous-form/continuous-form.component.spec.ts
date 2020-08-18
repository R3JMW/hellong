import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousFormComponent } from './continuous-form.component';

describe('ContinuousFormComponent', () => {
  let component: ContinuousFormComponent;
  let fixture: ComponentFixture<ContinuousFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuousFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
