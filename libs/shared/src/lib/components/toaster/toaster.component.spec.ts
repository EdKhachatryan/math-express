import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterComponent } from './toaster.component';

describe('FooterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
