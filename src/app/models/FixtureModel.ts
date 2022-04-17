import { JsonProperty, JsonObject } from 'typescript-json-serializer';
import { BaseModel } from './BaseModel';
import { TeamModel } from './TeamModel';

@JsonObject()
export class FixtureModel extends BaseModel {

  @JsonProperty()
  teamHome: TeamModel;

  @JsonProperty()
  teamAway: TeamModel;

  @JsonProperty()
  id: Number = 0;

  @JsonProperty()
  status: string = "";

  @JsonProperty()
  startDate: Date;
}