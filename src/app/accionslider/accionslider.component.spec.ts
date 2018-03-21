import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionsliderComponent } from './accionslider.component';

describe('AccionsliderComponent', () => {
  let component: AccionsliderComponent;
  let fixture: ComponentFixture<AccionsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
