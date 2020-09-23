import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSiteComponent } from './contact-site.component';

describe('ContactSiteComponent', () => {
  let component: ContactSiteComponent;
  let fixture: ComponentFixture<ContactSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
