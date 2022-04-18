import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ImmutableContext, ImmutableSelector} from '@ngxs-labs/immer-adapter';
import {Injectable} from '@angular/core';
import {CurrentBetStateModel} from "./current-bet-state.model";
import {BetInstance} from "../../models/BetInstance";
import {CurrentBetActions} from "./current-bet-actions";


@State<CurrentBetStateModel>({
  name: 'currentBet',
  defaults: {
    currentBet: new BetInstance(),
  }
})
@Injectable()
export class CurrentBetState {

  @Selector()
  @ImmutableSelector()
  static getCurrentBet(state: CurrentBetStateModel): BetInstance {

    return state.currentBet;
  }

  @Action(CurrentBetActions.SetCurrentBet)
  @ImmutableContext()
  setCurrentBet({setState}: StateContext<CurrentBetStateModel>, {payload}: CurrentBetActions.SetCurrentBet): void {
    setState((state: CurrentBetStateModel) => {
      state.currentBet = payload;

      return state;
    });
  }

  @Action(CurrentBetActions.AddBetEntry)
  @ImmutableContext()
  addBetEntry({setState}: StateContext<CurrentBetStateModel>, {payload}: CurrentBetActions.AddBetEntry): void {
    setState((state: CurrentBetStateModel) => {
      let entries = state.currentBet.betEntries;
      entries.push(payload);
      state.currentBet.betEntries = entries;
      state.currentBet.multiplier = state.currentBet.multiplier + payload.odds;
      return state;
    });
  }

  @Action(CurrentBetActions.RemoveBetEntry)
  @ImmutableContext()
  removeBetEntry({setState}: StateContext<CurrentBetStateModel>, {payload}: CurrentBetActions.RemoveBetEntry): void {
    setState((state: CurrentBetStateModel) => {
      let entries = state.currentBet.betEntries;
      entries.filter((entry) => {
        return entry !== payload;
      })
      state.currentBet.betEntries = entries;
      state.currentBet.multiplier = state.currentBet.multiplier - payload.odds;

      return state;
    });
  }

}
