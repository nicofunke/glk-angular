import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoehcComponent } from './goehc.component';

describe('GoehcComponent', () => {
  let component: GoehcComponent;
  let fixture: ComponentFixture<GoehcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoehcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoehcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
