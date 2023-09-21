import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetComponent } from './tweet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetComponent],imports:[ReactiveFormsModule,FormsModule,CommonModule]
    });
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
