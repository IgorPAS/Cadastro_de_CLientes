import { TestBed } from '@angular/core/testing';

import { WithoutLoginService } from './without-login.service';

describe('WithoutLoginService', () => {
  let service: WithoutLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithoutLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
