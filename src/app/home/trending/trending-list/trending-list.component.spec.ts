import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingListComponent } from './trending-list.component';

describe('TrendingListComponent', () => {
  let component: TrendingListComponent;
  let fixture: ComponentFixture<TrendingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingListComponent]
    });
    fixture = TestBed.createComponent(TrendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
