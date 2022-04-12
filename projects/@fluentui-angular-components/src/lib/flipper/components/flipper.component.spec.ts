import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentFlipperComponent } from './flipper.component';

describe('FlipperComponent', () => {
  let component: FluentFlipperComponent;
  let fixture: ComponentFixture<FluentFlipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentFlipperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentFlipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
