import { TestBed } from '@angular/core/testing';

import { FluentuiAngularComponentsService } from './fluentui-angular-components.service';

describe('FluentuiAngularComponentsService', () => {
  let service: FluentuiAngularComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluentuiAngularComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
