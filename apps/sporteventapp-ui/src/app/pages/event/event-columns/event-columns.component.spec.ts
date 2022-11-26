import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventColumnComponent } from './event-columns.component';

describe('EventComponent', () => {
  let component: EventColumnComponent;
  let fixture: ComponentFixture<EventColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
