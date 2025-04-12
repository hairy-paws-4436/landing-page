import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesPageComponent } from './functionalities-page.component';

describe('FunctionalitiesPageComponent', () => {
  let component: FunctionalitiesPageComponent;
  let fixture: ComponentFixture<FunctionalitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalitiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
