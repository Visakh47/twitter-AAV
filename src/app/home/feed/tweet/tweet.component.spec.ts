import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetComponent } from './tweet.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetComponent],
      imports: [CommonModule,FormsModule]
    });
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
