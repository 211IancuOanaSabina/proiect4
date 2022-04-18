import {BetInstance} from "../../models/BetInstance";
import {BetEntry} from "../../models/BetEntry";

export namespace CurrentBetActions {

  export class SetCurrentBet {
    static readonly type = '[CurrentBet] Set currentBet';

    constructor(public payload: BetInstance) {}
  }
  export class AddBetEntry {
    static readonly type = '[CurrentBet] Add betEntry';

    constructor(public payload: BetEntry) {}
  }

  export class RemoveBetEntry {
    static readonly type = '[CurrentBet] Remove betEntry';

    constructor(public payload: BetEntry) {}
  }

}
