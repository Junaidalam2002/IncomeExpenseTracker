import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InExTableComponent } from './in-ex-table.component';

describe('InExTableComponent', () => {
  let component: InExTableComponent;
  let fixture: ComponentFixture<InExTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InExTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InExTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
