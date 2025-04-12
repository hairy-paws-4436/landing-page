import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPetsPageComponent } from './popular-pets-page.component';

describe('PopularCarsPageComponent', () => {
  let component: PopularPetsPageComponent;
  let fixture: ComponentFixture<PopularPetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPetsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularPetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
