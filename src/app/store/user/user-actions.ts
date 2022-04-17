import { User } from 'src/app/models/user/user';

export namespace UserActions {

  export class SetUser {
    static readonly type = '[User] Set user';

    constructor(public payload: User | Partial<User>) {}
  }

}
