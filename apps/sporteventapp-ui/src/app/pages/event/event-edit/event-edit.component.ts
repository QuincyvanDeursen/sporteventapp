import { Component, OnInit } from '@angular/core';
import { SportEvent, SportEventType } from '@sporteventapp/domain-entities';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sporteventapp-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css'],
})
export class EventEditComponent implements OnInit {
  EventToUpdate!: SportEvent;
  eventIdParam: string | null | undefined;
  eventDateString!: string;
  types = Object.values(SportEventType);

  constructor(
    private eService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventIdParam = params.get('id');
      if (this.eventIdParam) {
        this.EventToUpdate = this.eService.getEventById(this.eventIdParam);
        this.eventDateString = this.toDateString(this.EventToUpdate.date);
        console.log(
          'Update retrieved event ngOnInit: param id = ' + this.eventIdParam
        );
      }
    });
  }

  onClickSubmit() {
    this.eService.updateEvent(this.EventToUpdate);
    this.router.navigateByUrl('events');
    console.log('Event Updated');
  }

  private toDateString(date: Date): string {
    return (
      date.getFullYear().toString() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      'T' +
      date.toTimeString().slice(0, 5)
    );
  }
}
