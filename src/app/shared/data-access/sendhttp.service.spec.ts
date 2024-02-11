import { TestBed } from '@angular/core/testing';

import { SendhttpService } from './sendhttp.service';

describe('SendhttpService', () => {
  let service: SendhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
