import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribesDetailComponent } from './tribes-detail.component';

describe('TribesDetailComponent', () => {
  let component: TribesDetailComponent;
  let fixture: ComponentFixture<TribesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
