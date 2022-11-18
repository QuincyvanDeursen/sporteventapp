import { Component, OnInit } from '@angular/core';
import { Event, Type } from '@sporteventapp/domain-entities';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'sporteventapp-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {
  event: Event = {
    id: '',
    title: '',
    description: '',
    price: 0,
    date: new Date(),
    durationInMin: 0,
    type: undefined,
  };

  types = Object.values(Type);

  constructor(private eService: EventService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.eService.addEvent(this.event);
    this.router.navigateByUrl('events');
  }

  onClickSubmit() {
    this.event.id = (this.eService.getAllEvents().length + 1).toString();
    this.eService.addEvent(this.event);
    console.log('Event Toegevoegd');
  }
}
