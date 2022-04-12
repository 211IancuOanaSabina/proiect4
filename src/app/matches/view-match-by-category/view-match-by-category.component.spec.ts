import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatchByCategoryComponent } from './view-match-by-category.component';

describe('ViewMatchByCategoryComponent', () => {
  let component: ViewMatchByCategoryComponent;
  let fixture: ComponentFixture<ViewMatchByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatchByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatchByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
