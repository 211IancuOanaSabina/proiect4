export abstract class BaseModel {
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}
