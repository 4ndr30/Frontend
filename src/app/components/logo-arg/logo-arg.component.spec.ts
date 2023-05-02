import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoARGComponent } from './logo-arg.component';

describe('LogoARGComponent', () => {
  let component: LogoARGComponent;
  let fixture: ComponentFixture<LogoARGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoARGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoARGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
