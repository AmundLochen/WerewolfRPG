import { TestBed, inject } from '@angular/core/testing';

import { TribesService } from './tribes.service';

describe('TribesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TribesService]
    });
  });

  it('should be created', inject([TribesService], (service: TribesService) => {
    expect(service).toBeTruthy();
  }));
});
