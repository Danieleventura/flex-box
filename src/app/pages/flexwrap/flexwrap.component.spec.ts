import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexwrapComponent } from './flexwrap.component';

describe('FlexwrapComponent', () => {
  let component: FlexwrapComponent;
  let fixture: ComponentFixture<FlexwrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexwrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
