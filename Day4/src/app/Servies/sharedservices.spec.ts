import { TestBed } from '@angular/core/testing';

import { Sharedservices } from './sharedservices';

describe('Sharedservices', () => {
  let service: Sharedservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharedservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
