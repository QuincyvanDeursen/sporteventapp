import { Injectable } from '@angular/core';
import { Event } from '@sporteventapp/domain-entities';
import { Type } from '@sporteventapp/domain-entities';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  events: Event[] = [
    {
      id: '1',
      title: 'Weightlift Techniek Demo',
      description:
        'Heb jij moeite met de snatch of de clean and press en heb je behoefte aan tips van een expert? Schrijf je dan in voor deze techniek sessie!',
      price: 20,
      date: new Date('Sat Dec 10 2022 19:00:00'),
      durationInMin: 90,
      type: Type.TechniekSessie,
    },
    {
      id: '2',
      title: 'Powerlift Techniek Demo',
      description:
        'Heb jij moeite met de squat, bench press, of deadlift en heb je behoefte aan tips van een expert? Schrijf je dan in voor deze techniek sessie!',
      price: 20,
      date: new Date('Do Dec 8 2022 19:00:00'),
      durationInMin: 120,
      type: Type.TechniekSessie,
    },
    {
      id: '3',
      title: 'Pencak silat Seminar',
      description:
        'Ben jij thuis in de Indonesische vechtkusnt Pencak Silat en wil je graag een sessie en ontmoeting hebben met zwarte band drager Jerry? Schrijf je dan nu in!',
      price: 30,
      date: new Date('Di Dec 13 2022 20:00:00'),
      durationInMin: 90,
      type: Type.Seminar,
    },
    {
      id: '4',
      title: 'Lezing over Sportvoeding',
      description:
        'Wil jij het uiterste uit je training kunnen halen door optimaal te herstellen en voldoende energie te hebben? Schrijf je in voor deze lezing voer sportvoeding!',
      price: 15,
      date: new Date('Woe Dec 14 2022 20:00:00'),
      durationInMin: 60,
      type: Type.Lezing,
    },
    {
      id: '5',
      title: 'Mock-Meet Powerliften',
      description:
        'Wil jij is op een vriendschappelijke manier ervaren hoe het is om in een wedstrijd setting te powerliften? Schrijf je dan nu in voor dit evenement!',
      price: 15,
      date: new Date('Za Dec24 2022 12:00:00'),
      durationInMin: 600,
      type: Type.Wedstrijd,
    },
  ];

  constructor() {
    console.log('Event-Service created');
  }

  getAllEvents(): Event[] {
    return this.events;
  }

  getEventById(id: string): Event {
    return this.events.filter((event: Event) => event.id === id)[0];
  }

  addEvent(newEvent: Event): void {
    this.events.push(newEvent);
  }

  updateUser(updatedEvent: Event) {
    console.log('Updating user ' + updatedEvent.title);

    const updatedEvents = this.events.filter(
      (event) => event.id !== updatedEvent.id
    );
    updatedEvents.push(updatedEvent);
    this.events = updatedEvents;

    console.log(this.events);
  }
}