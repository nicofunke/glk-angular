import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsSiteComponent } from './concerts-site.component';

describe('ConcertsSiteComponent', () => {
  let component: ConcertsSiteComponent;
  let fixture: ComponentFixture<ConcertsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
