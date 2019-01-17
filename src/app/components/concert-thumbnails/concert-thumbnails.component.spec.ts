import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertThumbnailsComponent } from './concert-thumbnails.component';

describe('ConcertThumbnailsComponent', () => {
  let component: ConcertThumbnailsComponent;
  let fixture: ComponentFixture<ConcertThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
