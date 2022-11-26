import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportClub } from '@sporteventapp/domain-entities';
import { SportclubService } from '../sportclub.service';

@Component({
  selector: 'sporteventapp-sportclub-create',
  templateUrl: './sportclub-create.component.html',
  styleUrls: ['./sportclub-create.component.css'],
})
export class SportclubCreateComponent implements OnInit {
  sportsString!: string;

  sportclub: SportClub = {
    id: '',
    name: '',
    websiteURL: '',
    city: '',
    zipCode: '',
    street: '',
    houseNumber: '',
    sports: [],
  };

  constructor(private scService: SportclubService, private router: Router) {}

  ngOnInit(): void {}

  onClickSubmit() {
    this.sportclub.sports = this.sportsString.split(',');
    this.sportclub.id = (
      this.scService.getAllSportclubs().length + 1
    ).toString();
    this.scService.addSportclub(this.sportclub);
    this.router.navigateByUrl('sportclubs');
    console.log('Sportclub Toegevoegd');
  }
}
