import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { TestingModule } from '../../testing/testing.module';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(TestingModule);
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
