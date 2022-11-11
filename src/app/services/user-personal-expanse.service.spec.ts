import { TestBed } from '@angular/core/testing';

import { UserPersonalExpanseService } from './user-personal-expanse.service';

describe('UserPersonalExpanseService', () => {
  let service: UserPersonalExpanseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPersonalExpanseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
