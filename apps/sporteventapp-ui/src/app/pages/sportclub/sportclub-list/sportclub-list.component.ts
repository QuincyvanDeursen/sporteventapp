import { Component, OnInit } from '@angular/core';
import { SportClub } from '@sporteventapp/domain-entities';
import { SportclubService } from '../sportclub.service';

@Component({
  selector: 'sporteventapp-sportclub-list',
  templateUrl: './sportclub-list.component.html',
  styleUrls: ['./sportclub-list.component.css'],
})
export class SportclubListComponent implements OnInit {
  sportclubs!: SportClub[];

  constructor(private scService: SportclubService) {}

  ngOnInit(): void {
    this.sportclubs = this.scService.getAllSportclubs();
    console.log(
      'eventsportclub getall() : ' +
        this.sportclubs.length +
        ' sportclubs found.'
    );
  }

  OnDeleteEvent(id: string) {
    console.log('Delete event with id: ' + id);

    this.scService.deleteSportclub(id);
    this.sportclubs = this.scService.getAllSportclubs();
  }
}
