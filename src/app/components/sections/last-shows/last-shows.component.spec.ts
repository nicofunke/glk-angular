import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastShowsComponent } from './last-shows.component';

describe('LastShowsComponent', () => {
  let component: LastShowsComponent;
  let fixture: ComponentFixture<LastShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
