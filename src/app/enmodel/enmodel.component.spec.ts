import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnmodelComponent } from './enmodel.component';

describe('EnmodelComponent', () => {
  let component: EnmodelComponent;
  let fixture: ComponentFixture<EnmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
