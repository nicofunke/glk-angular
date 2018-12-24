import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopImgComponent } from './top-img.component';

describe('TopImgComponent', () => {
  let component: TopImgComponent;
  let fixture: ComponentFixture<TopImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
