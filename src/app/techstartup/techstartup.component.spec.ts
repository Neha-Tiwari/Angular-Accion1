import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstartupComponent } from './techstartup.component';

describe('TechstartupComponent', () => {
  let component: TechstartupComponent;
  let fixture: ComponentFixture<TechstartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechstartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechstartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
