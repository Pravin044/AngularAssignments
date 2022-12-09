import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPostCountComponent } from './display-post-count.component';

describe('DisplayPostCountComponent', () => {
  let component: DisplayPostCountComponent;
  let fixture: ComponentFixture<DisplayPostCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPostCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPostCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
