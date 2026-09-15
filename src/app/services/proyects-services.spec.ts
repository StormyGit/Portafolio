import { TestBed } from '@angular/core/testing';

import { ProyectsServices } from './proyects-services';

describe('ProyectsServices', () => {
  let service: ProyectsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
