import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportclubCreateComponent } from './sportclub-create.component';

describe('SportclubCreateComponent', () => {
  let component: SportclubCreateComponent;
  let fixture: ComponentFixture<SportclubCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportclubCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportclubCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
