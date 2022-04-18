import {StateClass} from '@ngxs/store/internals';
import {FixtureState} from "./fixture/fixture-state";
import {CurrentBetState} from "./currentBet/current-bet-state";

export const enabledStates: StateClass[] = [
  FixtureState,
  CurrentBetState,
];
