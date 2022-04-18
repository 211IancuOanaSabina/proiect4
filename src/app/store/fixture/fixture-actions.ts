import {Fixture} from "../../models/Fixture";

export namespace FixtureActions {

  export class SetFixtures {
    static readonly type = '[Fixture] Set fixtures';

    constructor(public payload: Fixture[] | Partial<Fixture>[]) {}
  }

}
