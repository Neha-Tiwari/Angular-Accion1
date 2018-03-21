import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaapbilityComponent } from './caapbility.component';

describe('CaapbilityComponent', () => {
  let component: CaapbilityComponent;
  let fixture: ComponentFixture<CaapbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaapbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaapbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
