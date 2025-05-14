import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpComponent } from './nlp.component';

describe('NLPComponent', () => {
  let component: NlpComponent;
  let fixture: ComponentFixture<NlpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NlpComponent]
    });
    fixture = TestBed.createComponent(NlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
