import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyFoodComponent } from './baby-food.component';

describe('BabyFoodComponent', () => {
  let component: BabyFoodComponent;
  let fixture: ComponentFixture<BabyFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabyFoodComponent]
    });
    fixture = TestBed.createComponent(BabyFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
