import { TestBed } from '@angular/core/testing';

import { SportclubService } from './sportclub.service';

describe('SportclubService', () => {
  let service: SportclubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportclubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
