import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiteruserComponent } from './regiteruser.component';

describe('RegiteruserComponent', () => {
  let component: RegiteruserComponent;
  let fixture: ComponentFixture<RegiteruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiteruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
