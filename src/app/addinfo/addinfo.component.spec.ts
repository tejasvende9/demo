import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinfoComponent } from './addinfo.component';

describe('AddinfoComponent', () => {
  let component: AddinfoComponent;
  let fixture: ComponentFixture<AddinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
