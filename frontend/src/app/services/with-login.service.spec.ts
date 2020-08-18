import { TestBed } from '@angular/core/testing';

import { WithLoginService } from './with-login.service';

describe('WithLoginService', () => {
  let service: WithLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
