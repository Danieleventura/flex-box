import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignitemsComponent } from './alignitems.component';

describe('AlignitemsComponent', () => {
  let component: AlignitemsComponent;
  let fixture: ComponentFixture<AlignitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
