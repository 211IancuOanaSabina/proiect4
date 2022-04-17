import {JsonObject, JsonProperty} from 'typescript-json-serializer';
import { BaseModel } from '../BaseModel';

@JsonObject()
export class ApiError extends BaseModel {

  @JsonProperty()
  message: string;

  @JsonProperty()
  type: string;

  constructor(message?: string, type?: string) {
    super();
    this.message = message;
    this.type = type;
  }

}
