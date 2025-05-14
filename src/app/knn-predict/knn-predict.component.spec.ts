import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnnPredictComponent } from './knn-predict.component';

describe('KnnPredictComponent', () => {
  let component: KnnPredictComponent;
  let fixture: ComponentFixture<KnnPredictComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnnPredictComponent]
    });
    fixture = TestBed.createComponent(KnnPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
