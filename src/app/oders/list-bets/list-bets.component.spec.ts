import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBetsComponent } from './list-bets.component';

describe('ListBetsComponent', () => {
  let component: ListBetsComponent;
  let fixture: ComponentFixture<ListBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
