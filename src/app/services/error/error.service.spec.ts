import { TestBed, inject } from '@angular/core/testing';

import { ErrorService } from './error.service';
import { TestingModule } from '../../testing/testing.module';

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(TestingModule);
  });

  it('should be created', inject([ErrorService], (service: ErrorService) => {
    expect(service).toBeTruthy();
  }));
});
