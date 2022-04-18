import {Fixture} from "../../models/Fixture";

export interface FixtureStateModel {
  fixtures: Fixture[]|Partial<Fixture>[];
}

