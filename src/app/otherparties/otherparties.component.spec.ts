import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherpartiesComponent } from './otherparties.component';

describe('OtherpartiesComponent', () => {
  let component: OtherpartiesComponent;
  let fixture: ComponentFixture<OtherpartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherpartiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherpartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
