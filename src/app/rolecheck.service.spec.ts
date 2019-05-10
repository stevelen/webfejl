import { TestBed } from '@angular/core/testing';

import { RolecheckService } from './rolecheck.service';

describe('RolecheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolecheckService = TestBed.get(RolecheckService);
    expect(service).toBeTruthy();
  });
});
