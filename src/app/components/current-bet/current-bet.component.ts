import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subject, takeUntil} from "rxjs";
import {CurrentBetService} from "../../services/current-bet.service";
import {CurrentBetState} from "../../store/currentBet/current-bet-state";
import {BetInstance} from "../../models/BetInstance";
import {BetEntry} from "../../models/BetEntry";
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'current-bet',
  templateUrl: './current-bet.component.html',
  styleUrls: ['./current-bet.component.css']
})
export class CurrentBetComponent implements OnInit, OnDestroy {
  @Select(CurrentBetState.getCurrentBet)
  currentBet$: Observable<BetInstance>
  currentBet: BetInstance;

  amount: number = 1;

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

  submitBet() {
    let betInstance = this.currentBet.clone();
    betInstance.amount = this.amount;
    this.currentBetService.createBetInstance(betInstance).subscribe();
  }

}
