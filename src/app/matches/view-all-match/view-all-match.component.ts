import {Component, OnDestroy, OnInit} from '@angular/core';
import {Match} from '../match';
import {MatchesService} from '../../services/matches.service';
import {Observable, Subject, takeUntil} from "rxjs";
import {Fixture} from "../../models/Fixture";
import {Select} from "@ngxs/store";
import {FixtureState} from "../../store/fixture/fixture-state";
import {FixtureApiService} from "../../http/fixture-api.service";
import {FixtureService} from "../../services/fixture.service";

@Component({
  selector: 'app-view-all-match',
  templateUrl: './view-all-match.component.html',
  styleUrls: ['./view-all-match.component.css']
})
export class ViewAllMatchComponent implements OnInit, OnDestroy {
  @Select(FixtureState.getFixtures)
  fixtures$: Observable<Fixture[]>
  fixtures: Fixture[];

  matchList: Match[];

  private unsubscribe = new Subject();

  constructor(private matchService: MatchesService,
              private fixtureService: FixtureService) {
  }

  ngOnInit(): void {
    this.matchService.viewMatch().subscribe(data => {
      this.matchList = data;
    })
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
}
