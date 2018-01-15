import { TestBed, inject } from '@angular/core/testing';

import { BirthdaysService } from './birthdays.service';

describe('BirthdaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirthdaysService]
    });
  });

  it('should be created', inject([BirthdaysService], (service: BirthdaysService) => {
    expect(service).toBeTruthy();
  }));
});
