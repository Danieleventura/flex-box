import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifycontentComponent } from './justifycontent.component';

describe('JustifycontentComponent', () => {
  let component: JustifycontentComponent;
  let fixture: ComponentFixture<JustifycontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifycontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustifycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
