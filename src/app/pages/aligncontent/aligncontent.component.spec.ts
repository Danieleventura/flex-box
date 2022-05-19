import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AligncontentComponent } from './aligncontent.component';

describe('AligncontentComponent', () => {
  let component: AligncontentComponent;
  let fixture: ComponentFixture<AligncontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AligncontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AligncontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
