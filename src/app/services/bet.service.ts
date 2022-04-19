import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {BetApiService} from "../http/bet-api.service";
import {tap} from "rxjs/operators";
import {BetActions} from "../store/bet/bet-actions";

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(protected store: Store,
              protected api: BetApiService) {
  }

  public getUserBets(userAddress: string = 'sorin'): Observable<any> {

    return this.api.getUserBets(userAddress).pipe(
      tap((betInstances) => {
        this.store.dispatch(new BetActions.SetBets(betInstances));
      }),
    )
  }

}
