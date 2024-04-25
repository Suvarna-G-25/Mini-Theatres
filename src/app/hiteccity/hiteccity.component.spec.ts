import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiteccityComponent } from './hiteccity.component';

describe('HiteccityComponent', () => {
  let component: HiteccityComponent;
  let fixture: ComponentFixture<HiteccityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiteccityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiteccityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
