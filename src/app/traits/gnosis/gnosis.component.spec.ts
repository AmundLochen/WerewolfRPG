import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnosisComponent } from './gnosis.component';

describe('GnosisComponent', () => {
  let component: GnosisComponent;
  let fixture: ComponentFixture<GnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
