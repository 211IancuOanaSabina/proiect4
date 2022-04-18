import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListBetsComponent} from 'src/app/oders/list-bets/list-bets.component';
import {Select} from "@ngxs/store";
import {FixtureState} from "../../store/fixture/fixture-state";
import {Observable, Subject, takeUntil} from "rxjs";
import {Fixture} from "../../models/Fixture";
import {MatchesService} from "../../services/matches.service";
import {FixtureService} from "../../services/fixture.service";
import {CurrentBetService} from "../../services/current-bet.service";
import {CurrentBetState} from "../../store/currentBet/current-bet-state";
import {BetInstance} from "../../models/BetInstance";
import {BetEntry} from "../../models/BetEntry";

@Component({
  selector: 'current-bet',
  templateUrl: './current-bet.component.html',
  styleUrls: ['./current-bet.component.css']
})
export class CurrentBetComponent implements OnInit, OnDestroy {
  @Select(CurrentBetState.getCurrentBet)
  currentBet$: Observable<BetInstance>
  currentBet: BetInstance;

  private unsubscribe = new Subject();

  constructor(private currentBetService: CurrentBetService) {
  }

  ngOnInit(): void {
    this.currentBet$.pipe(takeUntil(this.unsubscribe)).subscribe((c) => {
      this.currentBet = c;
    })

  }

  ngOnDestroy(): void {
    this.unsubscribe.next('ceva');
    this.unsubscribe.complete();
  }

  removeBet(betEntry: BetEntry) {
    this.currentBetService.removeBetEntry(betEntry)
  }

}
