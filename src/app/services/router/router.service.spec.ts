import { TestBed, inject } from '@angular/core/testing';

import { RouterService } from './router.service';
import { TestingModule } from '../../testing/testing.module';

describe('RouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(TestingModule);
  });

  it('should be created', inject([RouterService], (service: RouterService) => {
    expect(service).toBeTruthy();
  }));
});
