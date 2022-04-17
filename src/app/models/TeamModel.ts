import { JsonProperty, JsonObject } from 'typescript-json-serializer';
import { BaseModel } from './BaseModel';

@JsonObject()
export class teamHome extends BaseModel {

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