import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportclubColumnsComponent } from './sportclub-columns.component';

describe('SportclubColumnsComponent', () => {
  let component: SportclubColumnsComponent;
  let fixture: ComponentFixture<SportclubColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportclubColumnsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportclubColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
