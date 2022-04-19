import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {Fixture} from "../models/Fixture";
import {CurrentBetActions} from "../store/currentBet/current-bet-actions";
import {BetEntry} from "../models/BetEntry";
import {CurrentBetApiService} from "../http/current-bet-api.service";
import {BetInstance} from "../models/BetInstance";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentBetService {

  constructor(protected store: Store,
              protected api: CurrentBetApiService) {
  }

  public bet1(fixture: Fixture, odds: number) {
    this.addBetEntry(fixture, odds, true, false);
  }

  public betX(fixture: Fixture, odds: number) {
    this.addBetEntry(fixture, odds);
  }

  public bet2(fixture: Fixture, odds: number) {
    this.addBetEntry(fixture, odds, false, true);
  }

  private addBetEntry(fixture: Fixture, odds: number, winnerHome: boolean | null = null, winnerAway: boolean | null = null) {
    let betEntry = new BetEntry();
    betEntry.fixture = fixture;
    betEntry.odds = odds;
    betEntry.winnerHome = winnerHome;
    betEntry.winnerAway = winnerAway;

    this.store.dispatch(new CurrentBetActions.AddBetEntry(betEntry));
  }

  public removeBetEntry(betEntry: BetEntry) {
    this.store.dispatch(new CurrentBetActions.RemoveBetEntry(betEntry));
  }

  public addUserAddress(address: string) {
    this.store.dispatch(new CurrentBetActions.AddUserAddress(address));
  }

  public addContractAddress(address: string) {
    this.store.dispatch(new CurrentBetActions.AddContractAddress(address));
  }

  public createBetInstance(betInstance: BetInstance): Observable<any> {
    return this.api.createBetInstance(betInstance);
  }

}
