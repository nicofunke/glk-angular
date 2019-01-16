import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamaeleonComponent } from './chamaeleon.component';

describe('ChamaeleonComponent', () => {
  let component: ChamaeleonComponent;
  let fixture: ComponentFixture<ChamaeleonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamaeleonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamaeleonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
