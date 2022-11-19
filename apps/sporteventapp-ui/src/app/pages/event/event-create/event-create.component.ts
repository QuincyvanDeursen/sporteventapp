import { Component, OnInit } from '@angular/core';
import { SportEvent, SportEventType } from '@sporteventapp/domain-entities';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'sporteventapp-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {
  event: SportEvent = {
    id: '',
    title: '',
    description: '',
    price: 0,
    date: new Date(),
    durationInMin: 0,
    type: undefined,
  };

  types = Object.values(SportEventType);

  constructor(private eService: EventService, private router: Router) {}

  ngOnInit(): void {}

  onClickSubmit() {
    this.event.id = (this.eService.getAllEvents().length + 1).toString();
    this.eService.addEvent(this.event);
    this.router.navigateByUrl('events');
    console.log('Event Toegevoegd');
  }
}
