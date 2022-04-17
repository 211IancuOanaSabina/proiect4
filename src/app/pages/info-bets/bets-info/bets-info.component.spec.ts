import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsInfoComponent } from './bets-info.component';

describe('BetsInfoComponent', () => {
  let component: BetsInfoComponent;
  let fixture: ComponentFixture<BetsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
