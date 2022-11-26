import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportclubDetailComponent } from './sportclub-detail.component';

describe('SportclubDetailComponent', () => {
  let component: SportclubDetailComponent;
  let fixture: ComponentFixture<SportclubDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportclubDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportclubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
