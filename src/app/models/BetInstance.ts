import {JsonProperty, JsonObject} from 'typescript-json-serializer';
import {BaseModel} from './BaseModel';
import {BetEntry} from "./BetEntry";

@JsonObject()
export class BetInstance extends BaseModel {

  @JsonProperty()
  id: Number = 0;

  @JsonProperty()
  status: string = "";

  @JsonProperty()
  endDate: Date;

  @JsonProperty()
  amount: number = 0;

  @JsonProperty()
  multiplier: number = 0;

  @JsonProperty()
  betEntries: BetEntry[] = [];

  @JsonProperty()
  contractAddress: string = "";

  @JsonProperty()
  userAddress: string = "";

}
