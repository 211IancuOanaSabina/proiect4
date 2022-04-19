import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ImmutableContext, ImmutableSelector} from '@ngxs-labs/immer-adapter';
import {Injectable} from '@angular/core';
import {CurrentBetStateModel} from "./current-bet-state.model";
import {BetInstance} from "../../models/BetInstance";
import {CurrentBetActions} from "./current-bet-actions";
import {JsonSerializer} from "typescript-json-serializer";
import {BetEntry} from "../../models/BetEntry";


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
      let currentBet = state.currentBet.clone();
      let entries = [];
      currentBet.betEntries.forEach((entry) => {
        entries.push(entry.clone())
      });
      entries.push(payload);
      currentBet.betEntries = entries;
      currentBet.multiplier = currentBet.multiplier + payload.odds;

      state.currentBet = currentBet;

      return state;
    });
  }

  @Action(CurrentBetActions.RemoveBetEntry)
  @ImmutableContext()
  removeBetEntry({setState}: StateContext<CurrentBetStateModel>, {payload}: CurrentBetActions.RemoveBetEntry): void {
    setState((state: CurrentBetStateModel) => {
      let currentBet = state.currentBet.clone();
      let entries = [];
      currentBet.betEntries.forEach((entry) => {
        if (entry != payload) {
          entries.push(entry.clone())
        }
      });
      currentBet.betEntries = entries;
      currentBet.multiplier = currentBet.multiplier - payload.odds;

      state.currentBet = currentBet;

      return state;
    });
  }

}
