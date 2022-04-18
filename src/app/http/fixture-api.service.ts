import {Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FixtureApiService {

  constructor(protected http: HttpClientService) {
  }

  getFixtures(): Observable<any> {
    let params = {
      "status": "NS",
    };
    return this.http.get(`/api/fixture/list`, params)
      .pipe(
        map((res: any) => res.data),
        map((res: any) => res.items),
      );
  }

}
