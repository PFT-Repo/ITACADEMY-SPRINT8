import { TestBed } from '@angular/core/testing';

import { ApistarsService } from './apistars.service';

describe('ApistarsService', () => {
  let service: ApistarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
