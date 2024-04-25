import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiyapurComponent } from './miyapur.component';

describe('MiyapurComponent', () => {
  let component: MiyapurComponent;
  let fixture: ComponentFixture<MiyapurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiyapurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiyapurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
