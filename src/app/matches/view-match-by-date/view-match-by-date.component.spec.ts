import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatchByDateComponent } from './view-match-by-date.component';

describe('ViewMatchByDateComponent', () => {
  let component: ViewMatchByDateComponent;
  let fixture: ComponentFixture<ViewMatchByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatchByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatchByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
