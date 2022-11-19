import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '@sporteventapp/domain-entities';

@Component({
  selector: 'sporteventapp-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event!: Event;
  eventIdParam: string | null | undefined;

  constructor(
    private eService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventIdParam = params.get('id');
      if (this.eventIdParam) {
        this.event = this.eService.getEventById(this.eventIdParam);
        console.log('Detail event ngOnInit: param id = ' + this.eventIdParam);
        console.log('Detail event ngOnInit: found event = ' + this.event);
      }
      console.log('Detail event ngOnInit: paramid mist');
    });
  }
}
