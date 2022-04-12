import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMatchComponent } from './view-all-match.component';

describe('ViewAllMatchComponent', () => {
  let component: ViewAllMatchComponent;
  let fixture: ComponentFixture<ViewAllMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
