import {BetInstance} from "../../models/BetInstance";

export namespace BetActions {

  export class SetBets {
    static readonly type = '[Bet] Set bets';

    constructor(public payload: BetInstance[] | Partial<BetInstance>[]) {
    }
  }

}
