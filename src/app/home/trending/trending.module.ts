import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { TrendingComponent } from './trending.component';

@NgModule({
  declarations: [
    TrendingListComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  TrendingComponent
  ]
})
export class TrendingModule { }
