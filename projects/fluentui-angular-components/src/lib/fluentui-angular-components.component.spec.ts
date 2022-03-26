import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentuiAngularComponentsComponent } from './fluentui-angular-components.component';

describe('FluentuiAngularComponentsComponent', () => {
  let component: FluentuiAngularComponentsComponent;
  let fixture: ComponentFixture<FluentuiAngularComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentuiAngularComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentuiAngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
