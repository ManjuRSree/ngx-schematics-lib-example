import { TestBed } from '@angular/core/testing';

import { UiLibExampleService } from './ui-lib-example.service';

describe('UiLibExampleService', () => {
  let service: UiLibExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiLibExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
