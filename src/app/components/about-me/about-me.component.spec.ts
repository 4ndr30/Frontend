import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMEComponent } from './about-me.component';

describe('AboutMEComponent', () => {
  let component: AboutMEComponent;
  let fixture: ComponentFixture<AboutMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
