import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEEPComponent } from './deep.component';

describe('DEEPComponent', () => {
  let component: DEEPComponent;
  let fixture: ComponentFixture<DEEPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DEEPComponent]
    });
    fixture = TestBed.createComponent(DEEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
