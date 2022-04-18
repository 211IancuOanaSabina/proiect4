import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subject, takeUntil} from "rxjs";
import {CurrentBetService} from "../../services/current-bet.service";
import {CurrentBetState} from "../../store/currentBet/current-bet-state";
import {BetInstance} from "../../models/BetInstance";
import {BetEntry} from "../../models/BetEntry";
import { HeaderComponent } from '../header/header.component';

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

  setAmount(){
    var inputRes = document.getElementsByClassName("form-control")
    alert(parseInt(inputRes[0]['value']))
    this.currentBet += inputRes[0]['value']
  }

  ngOnInit(): void {
    this.currentBet$.pipe(takeUntil(this.unsubscribe)).subscribe((c) => {
      this.currentBet = c;

      console.log(this.currentBet)
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
