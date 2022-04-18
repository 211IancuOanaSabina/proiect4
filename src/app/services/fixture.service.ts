import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FixtureApiService} from "../http/fixture-api.service";
import {tap} from "rxjs/operators";
import {Store} from "@ngxs/store";
import {Fixture} from "../models/Fixture";
import {FixtureActions} from "../store/fixture/fixture-actions";

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(protected api: FixtureApiService,
              protected store: Store) {
  }

  getFixtures(): Observable<any> {
    return this.api.getFixtures().pipe(
      tap(fixtures => this.store.dispatch(new FixtureActions.SetFixtures(fixtures))),
    );
  }

}
