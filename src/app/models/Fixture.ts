import {JsonProperty, JsonObject} from 'typescript-json-serializer';
import {BaseModel} from './BaseModel';
import {Team} from "./Team";

@JsonObject()
export class Fixture extends BaseModel {

  @JsonProperty()
  teamHome: Team;

  @JsonProperty()
  teamAway: Team;

  @JsonProperty()
  id: Number = 0;

  @JsonProperty()
  status: string = "";

  @JsonProperty()
  startDate: Date;

  @JsonProperty()
  betHome?: number;

  @JsonProperty()
  betDraw?: number;

  @JsonProperty()
  betAway?: number
}
