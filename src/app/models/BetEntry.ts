import {JsonProperty, JsonObject} from 'typescript-json-serializer';
import {BaseModel} from './BaseModel';
import {Fixture} from "./Fixture";

@JsonObject()
export class BetEntry extends BaseModel {

  @JsonProperty()
  id: Number = 0;

  @JsonProperty()
  fixture: Fixture;

  @JsonProperty()
  odds: number;

  @JsonProperty()
  winnerHome?: boolean = null;

  @JsonProperty()
  winnerAway?: boolean = null;

}
