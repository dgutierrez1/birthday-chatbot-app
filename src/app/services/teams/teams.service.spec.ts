import { TestBed, inject } from '@angular/core/testing';

import { TeamsService } from './teams.service';
import { TestingModule } from '../../testing/testing.module';

describe('TeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(TestingModule);
  });

  it('should be created', inject([TeamsService], (service: TeamsService) => {
    expect(service).toBeTruthy();
  }));
});
