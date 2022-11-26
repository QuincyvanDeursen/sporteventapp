import { Injectable } from '@angular/core';
import { SportEvent } from '@sporteventapp/domain-entities';
import { SportEventType } from '@sporteventapp/domain-entities';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  events: SportEvent[] = [
    {
      id: '1',
      title: 'Weightlift Techniek Demo',
      description:
        'Heb jij moeite met de snatch of de clean and press en heb je behoefte aan tips van een expert? Schrijf je dan in voor deze techniek sessie!',
      price: 20,
      date: new Date('2022-12-15T12:20'),
      durationInMin: 90,
      type: SportEventType.TechniekSessie,
      maxEnrollments: 50,
    },
    {
      id: '2',
      title: 'Powerlift Techniek Demo',
      description:
        'Heb jij moeite met de squat, bench press, of deadlift en heb je behoefte aan tips van een expert? Schrijf je dan in voor deze techniek sessie!',
      price: 20,
      date: new Date('2023-01-15T15:40'),
      durationInMin: 120,
      type: SportEventType.TechniekSessie,
      maxEnrollments: 40,
    },
    {
      id: '3',
      title: 'Pencak silat Seminar',
      description:
        'Ben jij thuis in de Indonesische vechtkusnt Pencak Silat en wil je graag een sessie en ontmoeting hebben met zwarte band drager Jerry? Schrijf je dan nu in!',
      price: 30,
      date: new Date('2022-12-18T17:00'),
      durationInMin: 90,
      type: SportEventType.Seminar,
      maxEnrollments: 30,
    },
    {
      id: '4',
      title: 'Lezing over Sportvoeding',
      description:
        'Wil jij het uiterste uit je training kunnen halen door optimaal te herstellen en voldoende energie te hebben? Schrijf je in voor deze lezing voer sportvoeding!',
      price: 15,
      date: new Date('2023-02-20T16:30'),
      durationInMin: 60,
      type: SportEventType.Lezing,
      maxEnrollments: 30,
    },
    {
      id: '5',
      title: 'Mock-Meet Powerliften',
      description:
        'Wil jij is op een vriendschappelijke manier ervaren hoe het is om in een wedstrijd setting te powerliften? Schrijf je dan nu in voor dit evenement!',
      price: 15,
      date: new Date('2022-12-05T14:00'),
      durationInMin: 600,
      type: SportEventType.Wedstrijd,
      maxEnrollments: 20,
    },
  ];

  constructor() {
    console.log('Event-Service created');
  }

  getAllEvents(): SportEvent[] {
    return this.events;
  }

  getEventById(id: string): SportEvent {
    return this.events.filter((event: SportEvent) => event.id === id)[0];
  }

  addEvent(newEvent: SportEvent): void {
    this.events.push(newEvent);
  }

  updateEvent(updatedEvent: SportEvent) {
    console.log('Updating user ' + updatedEvent.title);

    const updatedEvents = this.events.filter(
      (event) => event.id !== updatedEvent.id
    );
    updatedEvents.push(updatedEvent);
    this.events = updatedEvents;

    console.log(this.events);
  }

  deleteEvent(id: string) {
    console.log('Deleting event with id ' + id);
    this.events = this.events.filter((event) => event.id !== id);
  }
}
