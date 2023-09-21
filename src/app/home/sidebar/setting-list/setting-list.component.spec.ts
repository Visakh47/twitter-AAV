import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingListComponent } from './setting-list.component';
import { Router } from '@angular/router';

describe('SettingListComponent', () => {
  let component: SettingListComponent;
  let fixture: ComponentFixture<SettingListComponent>;
let router:Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingListComponent],
      providers:[Router]
      
    });
    fixture = TestBed.createComponent(SettingListComponent);
    component = fixture.componentInstance;
    router =  TestBed.inject(Router);
    fixture.detectChanges();
  });
  it('is navigating',()=>{
    const navigateSpy = spyOn(router, 'navigate');
    component.redirectProduct();
    expect(navigateSpy).toHaveBeenCalledWith(['products']);
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
