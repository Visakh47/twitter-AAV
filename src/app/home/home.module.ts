import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeedModule } from './feed/feed.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { TrendingModule } from './trending/trending.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    SidebarModule,
    TrendingModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
