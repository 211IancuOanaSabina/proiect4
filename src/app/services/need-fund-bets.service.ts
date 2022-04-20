import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {BetApiService} from "../http/bet-api.service";
import {tap} from "rxjs/operators";
import {BetActions} from "../store/bet/bet-actions";
import {BetInstance} from "../models/BetInstance";

@Injectable({
  providedIn: 'root'
})
export class NeedFundBetsService {
  public betInstances: BetInstance[] = [];

  constructor(protected api: BetApiService) {
  }

  public getNeedFundBets(): Observable<any> {

    return this.api.getNeedFundBets().pipe(
      tap((betInstances) => {
        this.betInstances = betInstances;
      }),
    )
  }

  public fundBet(id: number): Observable<any> {

    return this.api.fundBet(id).pipe(
      tap(console.log),
    )
  }

}
