import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionPredictComponent } from './regression-predict.component';

describe('RegressionPredictComponent', () => {
  let component: RegressionPredictComponent;
  let fixture: ComponentFixture<RegressionPredictComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegressionPredictComponent]
    });
    fixture = TestBed.createComponent(RegressionPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
