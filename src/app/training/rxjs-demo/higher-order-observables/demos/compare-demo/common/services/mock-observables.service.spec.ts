import { TestBed } from '@angular/core/testing';

import { MockObservablesService } from './mock-observables.service';

describe('MockObservablesService', () => {
  let service: MockObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
