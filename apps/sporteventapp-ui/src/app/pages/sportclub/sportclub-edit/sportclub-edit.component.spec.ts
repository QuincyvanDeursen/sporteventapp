import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportclubEditComponent } from './sportclub-edit.component';

describe('SportclubEditComponent', () => {
  let component: SportclubEditComponent;
  let fixture: ComponentFixture<SportclubEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportclubEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportclubEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
