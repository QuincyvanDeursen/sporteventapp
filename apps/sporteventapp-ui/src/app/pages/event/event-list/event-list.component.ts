import { Component, OnInit } from '@angular/core';
import { Event } from '@sporteventapp/domain-entities';
import { EventService } from '../event.service';

@Component({
  selector: 'sporteventapp-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events!: Event[];
  constructor(private eService: EventService) {}

  ngOnInit(): void {
    this.events = this.eService.getAllEvents();
    console.log(
      'eventlist getall() : ' + this.events.length + ' events found.'
    );
  }
}
