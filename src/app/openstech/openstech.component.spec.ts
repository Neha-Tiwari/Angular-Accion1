import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenstechComponent } from './openstech.component';

describe('OpenstechComponent', () => {
  let component: OpenstechComponent;
  let fixture: ComponentFixture<OpenstechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenstechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenstechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
