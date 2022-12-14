import { Component, OnInit } from '@angular/core';
import { SportEvent } from '@sporteventapp/domain-entities';
import { EventService } from '../event.service';

@Component({
  selector: 'sporteventapp-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events!: SportEvent[];

  constructor(private eService: EventService) {}

  ngOnInit(): void {
    this.events = this.eService.getAllEvents();
    console.log(
      'eventlist getall() : ' + this.events.length + ' events found.'
    );
  }

  OnDeleteEvent(id: string) {
    console.log('Delete event with id: ' + id);

    this.eService.deleteEvent(id);
    this.events = this.eService.getAllEvents();
  }
}
