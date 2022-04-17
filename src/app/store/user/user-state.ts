import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserStateModel } from './user-state.model';

import { ImmutableContext, ImmutableSelector } from '@ngxs-labs/immer-adapter';
import { UserActions } from './user-actions';
import { Injectable } from '@angular/core';
import { deserialize, serialize } from 'typescript-json-serializer';
import { User } from 'src/app/models/user/user';


@State<UserStateModel>({
  name: 'userState',
  defaults: {
    user: new User(),
  }
})
@Injectable()
export class UserState {

  @Selector()
  @ImmutableSelector()
  static getUser(state: UserStateModel): User {
    return deserialize<User>(state.user, User);
  }

  @Action(UserActions.SetUser)
  @ImmutableContext()
  setUser({ setState }: StateContext<UserStateModel>, { payload }: UserActions.SetUser): void {
    setState((state: UserStateModel) => {
      if (payload instanceof User) {
        state.user = serialize(payload);
      } else {
        state.user = payload;
      }
      return state;
    });
  }




}
