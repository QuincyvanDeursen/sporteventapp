import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportclubListComponent } from './sportclub-list.component';

describe('SportclubListComponent', () => {
  let component: SportclubListComponent;
  let fixture: ComponentFixture<SportclubListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportclubListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportclubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
