import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserApiService } from '../http/user-api.service';
import { map, tap } from 'rxjs/operators';
import { UserActions } from '../store/user/user-actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected store: Store,
    protected api: UserApiService,
  ) { }

  changeUsername(username: string): Observable<any> {
    return this.api.changeUsername(username).pipe(
      map(data => data.user),
      tap(user => this.store.dispatch(new UserActions.SetUser(user))),
    );
  }
  // getMessages(userId: number, email: string): Observable<any> {
  //   return this.api.getMessages(email).pipe(
  //     // map(data => data.user),
  //     tap(console.log),
  //     map(messages => { return [...messages.messagesFor, ...messages.messagesFrom] }),
  //     tap(messages => { messages.sort((m1, m2) => m1 - m2) }),
  //     tap(console.log),
  //     tap(messages => this.store.dispatch(new MultiplayerDataActions.SetUserMessages({ userId, messages }))),
  //   );
  // }
}
