import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpComponent } from './enterp.component';

describe('EnterpComponent', () => {
  let component: EnterpComponent;
  let fixture: ComponentFixture<EnterpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
