import { JsonProperty, JsonObject } from 'typescript-json-serializer';
import { BaseModel } from './BaseModel';
import { TeamModel } from './TeamModel';

@JsonObject()
export class Team extends BaseModel {

  @JsonProperty()
  country: string = "";

  @JsonProperty()
  founded: Number = 0;

  @JsonProperty()
  national: Boolean = false;

  @JsonProperty()
  logo: string = "";

  @JsonProperty()
  id: Number = 0;

  @JsonProperty()
  name: string = "";
}