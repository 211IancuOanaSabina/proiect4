import {Component, OnDestroy, OnInit} from '@angular/core';
import {BetInstance} from "../../models/BetInstance";
import {NeedFundBetsService} from "../../services/need-fund-bets.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-list-bets',
  templateUrl: './need-funds-bets.component.html',
  styleUrls: ['./need-funds-bets.component.css']
})
export class NeedFundsBetsComponent implements OnInit, OnDestroy {

  betInstances: BetInstance[];

  private unsubscribe = new Subject();

  constructor(private betService: NeedFundBetsService,
  ) {
  }

  ngOnInit(): void {
    this.betService.getNeedFundBets().subscribe(b => {
      this.betInstances = b;
    })

  }

  ngOnDestroy(): void {
    this.unsubscribe.next('ceva');
    this.unsubscribe.complete();
  }

  fund(id: number) {
    this.betService.fundBet(id).subscribe(console.log);
  }

}
