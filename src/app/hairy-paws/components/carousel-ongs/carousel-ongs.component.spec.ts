import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOngsComponent } from './carousel-ongs.component';

describe('CarouselBrandsComponent', () => {
  let component: CarouselOngsComponent;
  let fixture: ComponentFixture<CarouselOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselOngsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
