import { JsonProperty, Serializable } from 'typescript-json-serializer';
import { BaseModel } from '../BaseModel';

@Serializable()
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
