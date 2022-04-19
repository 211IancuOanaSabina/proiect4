import {Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {BetInstance} from "../models/BetInstance";

@Injectable({
  providedIn: 'root'
})
export class CurrentBetApiService {

  constructor(protected http: HttpClientService) {
  }

  createBetInstance(betInstance: BetInstance): Observable<any> {

    return this.http.post(`/api/bet-instance/create`, betInstance)
      .pipe(
        tap(console.log),
        map((res: any) => res.data),
      );
  }

}
