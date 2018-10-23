import { TestBed } from '@angular/core/testing';

import { DAOService } from './dao.service';

describe('DAOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DAOService = TestBed.get(DAOService);
    expect(service).toBeTruthy();
  });
});
