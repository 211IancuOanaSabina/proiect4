import {BetInstance} from "../../models/BetInstance";

export interface BetStateModel {
  betInstances: BetInstance[] | Partial<BetInstance>[];
}

