import {Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {BetInstance} from "../models/BetInstance";

@Injectable({
  providedIn: 'root'
})
export class BetApiService {

  constructor(protected http: HttpClientService) {
  }

  getUserBets(userAddress: string): Observable<any> {

    return this.http.get(`/api/bet-instance/${userAddress}`,)
      .pipe(
        tap(console.log),
        map((res: any) => res.data),
        map((res: any) => res.items),
      );
  }

}
