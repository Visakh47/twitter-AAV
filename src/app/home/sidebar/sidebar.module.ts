import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [
    SettingListComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
