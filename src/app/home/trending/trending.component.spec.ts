import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingComponent } from './trending.component';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { CommonModule } from '@angular/common';

describe('TrendingComponent', () => {
  let component: TrendingComponent;
  let fixture: ComponentFixture<TrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TrendingListComponent,
        TrendingComponent
      ],
      imports: [
        CommonModule
      ],
    });
    fixture = TestBed.createComponent(TrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
