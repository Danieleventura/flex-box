import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexdirectionComponent } from './flexdirection.component';

describe('FlexdirectionComponent', () => {
  let component: FlexdirectionComponent;
  let fixture: ComponentFixture<FlexdirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexdirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexdirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
