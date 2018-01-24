import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { TestingModule } from '../../testing/testing.module';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(TestingModule);
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
