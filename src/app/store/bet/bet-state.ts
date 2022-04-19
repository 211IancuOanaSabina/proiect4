import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ImmutableContext, ImmutableSelector} from '@ngxs-labs/immer-adapter';
import {Injectable} from '@angular/core';
import {BetStateModel} from "./bet-state.model";
import {BetActions} from "./bet-actions";
import {BetInstance} from "../../models/BetInstance";


@State<BetStateModel>({
  name: 'bets',
  defaults: {
    betInstances: [],
  }
})
@Injectable()
export class BetState {

  @Selector()
  @ImmutableSelector()
  static getBets(state: BetStateModel): BetInstance[] | Partial<BetInstance>[] {
    return state.betInstances;
  }

  @Action(BetActions.SetBets)
  @ImmutableContext()
  setBets({setState}: StateContext<BetStateModel>, {payload}: BetActions.SetBets): void {
    setState((state: BetStateModel) => {
      state.betInstances = payload;

      return state;
    });
  }

}
