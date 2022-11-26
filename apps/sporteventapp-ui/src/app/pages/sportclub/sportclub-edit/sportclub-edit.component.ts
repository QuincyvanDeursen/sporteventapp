import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportClub } from '@sporteventapp/domain-entities';
import { SportclubService } from '../sportclub.service';

@Component({
  selector: 'sporteventapp-sportclub-edit',
  templateUrl: './sportclub-edit.component.html',
  styleUrls: ['./sportclub-edit.component.css'],
})
export class SportclubEditComponent implements OnInit {
  sportclubToUpdate!: SportClub;
  sportclubParamId!: string | null | undefined;
  sportsclubsString!: string | null | undefined;

  constructor(
    private scService: SportclubService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.sportclubParamId = params.get('id');
      if (this.sportclubParamId) {
        this.sportclubToUpdate = this.scService.getSportclubById(
          this.sportclubParamId
        );
        this.sportsclubsString = this.toSportString(
          this.sportclubToUpdate.sports
        );
        console.log(
          'Update sportclub ngOnInit: param id = ' + this.sportclubParamId
        );
      }
    });
  }
  onClickSubmit() {
    this.scService.updateSportclub(this.sportclubToUpdate);
    this.router.navigateByUrl('sportclubs');
    console.log('Sportclub Updated');
  }

  private toSportString(sportArray: string[]): string {
    return sportArray.join(',');
  }
}
