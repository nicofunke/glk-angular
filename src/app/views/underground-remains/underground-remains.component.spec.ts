import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UndergroundRemainsComponent } from "./underground-remains.component";

describe("UndergroundRemainsComponent", () => {
  let component: UndergroundRemainsComponent;
  let fixture: ComponentFixture<UndergroundRemainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergroundRemainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergroundRemainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
