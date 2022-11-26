import { Injectable } from '@angular/core';
import { SportClub } from '@sporteventapp/domain-entities';

@Injectable({
  providedIn: 'root',
})
export class SportclubService {
  sportclubs: SportClub[] = [
    {
      id: '1',
      name: 'AlphaGym',
      websiteURL:
        'https://www.google.com/search?q=alphagmy&oq=alphagmy&aqs=chrome..69i57.873j0j7&sourceid=chrome&ie=UTF-8',
      city: 'Breda',
      zipCode: '1012AH',
      street: 'Lisdodde',
      houseNumber: '34',
      sports: ['Fitness', 'Powerlift', 'Bodybuilding'],
    },
    {
      id: '2',
      name: 'JakesGym',
      websiteURL:
        'https://www.google.com/search?q=Jakesgym&sxsrf=ALiCzsYVV9-jVg8pR0DbWVkyotjiLvCTkw%3A1669411376570&ei=MDKBY72qIrr_7_UP7bGY8Ao&ved=0ahUKEwi9gtaAosr7AhW6_7sIHe0YBq4Q4dUDCA8&uact=5&oq=Jakesgym&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQywEyCwguEIAEEMcBEK8BOgoIIxCwAhCwAxAnOhAILhCABBDHARCvARCwAxANOgsIABAeELADEA0QCjoJCAAQHhCwAxANOgQIIxAnOg4ILhCABBCxAxDHARDRAzoICC4QgAQQ1AI6EQguEIMBEMcBELEDENEDEIAEOhEILhCABBCxAxCDARDHARDRAzoFCAAQgAQ6CAgAEIAEELEDOggILhCxAxCDAToLCAAQgAQQsQMQgwE6BQguEIAEOgsILhCABBCxAxDUAjoICAAQsQMQgwE6CwguEIAEELEDEIMBOggILhCABBCxAzoOCC4QrwEQxwEQsQMQgAQ6EAguEIAEEMcBEK8BEAoQywE6CAguEIAEEMsBOgoIABCABBAKEMsBOgcIABCABBAKOg4ILhCABBDHARCvARDLAUoECEEYAUoECEYYAFCnCFieD2CHEWgCcAB4AIABb4gBvwWSAQM3LjGYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp',
      city: 'Breda',
      zipCode: '2340AP',
      street: 'Waterviolier',
      houseNumber: '54',
      sports: ['Fitness', 'calisthenics', 'Bodybuilding'],
    },
    {
      id: '3',
      name: 'HardcoreGym',
      websiteURL:
        'https://www.google.com/search?q=HardcoreGym&sxsrf=ALiCzsbILy-Z_9D7rPRcais4giaHIrT6cg%3A1669411398632&ei=RjKBY_WcJsWK9u8P1reZmAQ&ved=0ahUKEwj115iLosr7AhVFhf0HHdZbBkMQ4dUDCA8&uact=5&oq=HardcoreGym&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoLCAAQgAQQsAMQywE6DgguEIAEEMcBEK8BELADSgQIQRgBSgQIRhgAUNEDWNEDYOMEaANwAHgAgAFEiAFEkgEBMZgBAKABAqABAcgBAsABAQ&sclient=gws-wiz-serp',
      city: 'Eindhoven',
      zipCode: '1458HT',
      street: 'Priemkruid',
      houseNumber: '8',
      sports: ['Powerlift', 'Bodybuilding'],
    },
    {
      id: '4',
      name: 'GetFitGym',
      websiteURL:
        'https://www.google.com/search?q=GetFitGym&sxsrf=ALiCzsbAu0it9c-4Q8y9h3SnBRJX7btJ-g%3A1669411488092&ei=oDKBY6yXBY2I9u8P5oaJiAk&ved=0ahUKEwis5-y1osr7AhUNhP0HHWZDApEQ4dUDCA8&uact=5&oq=GetFitGym&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzINCC4QrwEQxwEQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCkoECEEYAUoECEYYAFD3Alj3AmDRCmgDcAB4AIABhAGIAYQBkgEDMC4xmAEAoAECoAEBwAEB&sclient=gws-wiz-serp',
      city: 'Tilburg',
      zipCode: '2345GH',
      street: 'Sterrekroos',
      houseNumber: '23',
      sports: ['Fitness', 'Yoga'],
    },
    {
      id: '5',
      name: 'MATS',
      websiteURL: 'https://mat-school.nl/',
      city: 'Breda',
      zipCode: '1012AH',
      street: 'Honderbunderd',
      houseNumber: '34',
      sports: ['Jiu-jitsu', 'Kickboksen', 'MMA'],
    },
  ];

  constructor() {
    console.log('Sportclub-Service created');
  }

  getAllSportclubs(): SportClub[] {
    return this.sportclubs;
  }

  getSportclubById(id: string): SportClub {
    return this.sportclubs.filter(
      (sportclub: SportClub) => sportclub.id === id
    )[0];
  }

  addSportclub(newSportClub: SportClub): void {
    this.sportclubs.push(newSportClub);
  }

  updateSportclub(updatedSportClub: SportClub) {
    console.log('Updating Sportclub ' + updatedSportClub.name);

    const updatedSportClubs = this.sportclubs.filter(
      (sportclubs) => sportclubs.id !== updatedSportClub.id
    );
    updatedSportClubs.push(updatedSportClub);
    this.sportclubs = updatedSportClubs;

    console.log(this.sportclubs);
  }

  deleteSportclub(id: string) {
    console.log('Deleting sportclub with id ' + id);
    this.sportclubs = this.sportclubs.filter(
      (sportclub) => sportclub.id !== id
    );
  }
}
