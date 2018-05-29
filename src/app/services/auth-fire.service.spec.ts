import { TestBed, inject } from '@angular/core/testing';

import { AuthFireService } from './auth-fire.service';

describe('AuthFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFireService]
    });
  });

  it('should be created', inject([AuthFireService], (service: AuthFireService) => {
    expect(service).toBeTruthy();
  }));
});
