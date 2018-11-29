import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenownComponent } from './renown.component';

describe('RenownComponent', () => {
  let component: RenownComponent;
  let fixture: ComponentFixture<RenownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
