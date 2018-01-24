import { TestBed, inject } from '@angular/core/testing';

import { BirthdaysService } from './birthdays.service';
import { TestingModule } from '../../testing/testing.module';

describe('BirthdaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(TestingModule);
  });

  it('should be created', inject([BirthdaysService], (service: BirthdaysService) => {
    expect(service).toBeTruthy();
  }));
});
