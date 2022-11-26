import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportclubService } from '../sportclub.service';
import { SportClub } from '@sporteventapp/domain-entities';

@Component({
  selector: 'sporteventapp-sportclub-detail',
  templateUrl: './sportclub-detail.component.html',
  styleUrls: ['./sportclub-detail.component.css'],
})
export class SportclubDetailComponent implements OnInit {
  sportclub!: SportClub;
  clubIdParam: string | null | undefined;

  constructor(
    private scService: SportclubService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.clubIdParam = params.get('id');
      if (this.clubIdParam) {
        this.sportclub = this.scService.getSportclubById(this.clubIdParam);
        console.log(
          'Detail sportclub ngOnInit: param id = ' + this.clubIdParam
        );
        console.log(
          'Detail sportclub ngOnInit: found sportclub = ' + this.sportclub
        );
      }
      console.log('Detail sportclub ngOnInit: paramid mist');
    });
  }
}
