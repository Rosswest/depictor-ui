import { TestBed } from '@angular/core/testing';

import { DepictService } from './depict/depict.service';

describe('DepictService', () => {
  let service: DepictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
