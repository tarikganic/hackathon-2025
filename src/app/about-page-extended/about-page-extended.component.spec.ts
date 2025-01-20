import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageExtendedComponent } from './about-page-extended.component';

describe('AboutPageExtendedComponent', () => {
  let component: AboutPageExtendedComponent;
  let fixture: ComponentFixture<AboutPageExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageExtendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
