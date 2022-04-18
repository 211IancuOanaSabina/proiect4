import {Component, OnDestroy, OnInit} from '@angular/core';
import {Match} from '../match';
import {MatchesService} from '../../services/matches.service';
import {Observable, Subject, takeUntil} from "rxjs";
import {Fixture} from "../../models/Fixture";
import {Select} from "@ngxs/store";
import {FixtureState} from "../../store/fixture/fixture-state";
import {FixtureApiService} from "../../http/fixture-api.service";
import {FixtureService} from "../../services/fixture.service";
import {CurrentBetService} from "../../services/current-bet.service";

@Component({
  selector: 'app-view-all-match',
  templateUrl: './view-all-match.component.html',
  styleUrls: ['./view-all-match.component.css']
})
export class ViewAllMatchComponent implements OnInit, OnDestroy {
  @Select(FixtureState.getFixtures)
  fixtures$: Observable<Fixture[]>
  fixtures: Fixture[];

  private unsubscribe = new Subject();

  constructor(private fixtureService: FixtureService,
              private currentBetService: CurrentBetService) {
  }

  ngOnInit(): void {
    this.fixtures$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.fixtures = f;
    })
    this.fixtureService.getFixtures().subscribe(response => {
      console.log(response);
    })

  }

  ngOnDestroy(): void {
    this.unsubscribe.next('ceva');
    this.unsubscribe.complete();
  }

  public bet1(fixture: Fixture, odds: number) {
    this.currentBetService.bet1(fixture, odds);
  }

  public betX(fixture: Fixture, odds: number) {
    this.currentBetService.betX(fixture, odds);
  }

  public bet2(fixture: Fixture, odds: number) {
    this.currentBetService.bet2(fixture, odds);
  }

}
