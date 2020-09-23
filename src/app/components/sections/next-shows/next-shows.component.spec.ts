import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextShowsComponent } from './next-shows.component';

describe('NextShowsComponent', () => {
  let component: NextShowsComponent;
  let fixture: ComponentFixture<NextShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
