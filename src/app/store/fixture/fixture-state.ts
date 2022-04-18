import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ImmutableContext, ImmutableSelector} from '@ngxs-labs/immer-adapter';
import {Injectable} from '@angular/core';
import {FixtureActions} from "./fixture-actions";
import {FixtureStateModel} from "./fixture-state.model";
import {Fixture} from "../../models/Fixture";


@State<FixtureStateModel>({
  name: 'fixturesState',
  defaults: {
    fixtures: [],
  }
})
@Injectable()
export class FixtureState {

  @Selector()
  @ImmutableSelector()
  static getFixtures(state: FixtureStateModel): Fixture[] | Partial<Fixture>[] {
    return state.fixtures;
  }

  @Action(FixtureActions.SetFixtures)
  @ImmutableContext()
  setFixtures({setState}: StateContext<FixtureStateModel>, {payload}: FixtureActions.SetFixtures): void {
    setState((state: FixtureStateModel) => {
      // if (payload instanceof Fixture[]) {
      //   state.user = serialize(payload);
      // } else {
      //   state.fixtures = payload;
      // }
      state.fixtures = payload;

      return state;
    });
  }


}
