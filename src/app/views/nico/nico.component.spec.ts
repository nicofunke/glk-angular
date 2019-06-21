import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicoComponent } from './nico.component';

describe('NicoComponent', () => {
  let component: NicoComponent;
  let fixture: ComponentFixture<NicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
