import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {BetState} from "../../store/bet/bet-state";
import {Observable, Subject, takeUntil} from "rxjs";
import {BetInstance} from "../../models/BetInstance";
import {BetService} from "../../services/bet.service";

@Component({
  selector: 'app-list-bets',
  templateUrl: './list-bets.component.html',
  styleUrls: ['./list-bets.component.css']
})
export class ListBetsComponent implements OnInit, OnDestroy {
  @Select(BetState.getBets)
  betInstances$: Observable<BetInstance[]>
  betInstances: BetInstance[];

  private unsubscribe = new Subject();

  constructor(private betService: BetService,
  ) {
  }

  ngOnInit(): void {
    this.betInstances$.pipe(takeUntil(this.unsubscribe)).subscribe((b) => {
      this.betInstances = b;
    })
    this.betService.getUserBets().subscribe(response => {
      console.log(response);
    })

  }

  ngOnDestroy(): void {
    this.unsubscribe.next('ceva');
    this.unsubscribe.complete();
  }

}
