import {Component, OnInit, OnDestroy} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, Subject, takeUntil} from "rxjs";
import {BetState} from "../../store/bet/bet-state";
import {BetInstance} from "../../models/BetInstance";
import {BetService} from "../../services/bet.service";
//todo asta cred ca o stergem ca ma incurca
@Component({
  selector: 'app-bets-info',
  templateUrl: './bets-info.component.html',
  styleUrls: ['./bets-info.component.css']
})
export class BetsInfoComponent implements OnInit, OnDestroy {
  // @Select(BetState.getBets)
  // betInstances$: Observable<BetInstance[]>
  // betInstances: BetInstance[];
  //
  private unsubscribe = new Subject();

  constructor(private betService: BetService,
  ) {
  }

  ngOnInit(): void {
    // this.betInstances$.pipe(takeUntil(this.unsubscribe)).subscribe((b) => {
    //   this.betInstances = b;
    // })
    // this.betService.getUserBets().subscribe(response => {
    //   console.log(response);
    // })

  }

  ngOnDestroy(): void {
    this.unsubscribe.next('ceva');
    this.unsubscribe.complete();
  }

}
