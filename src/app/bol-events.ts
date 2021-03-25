import { Serializable } from './serializable'

export class BolEvents implements Serializable<BolEvents> {
  public dict: any[] = [];

  deserialize(input: any): BolEvents {
    input.forEach((element: any) => {
      this.dict.push({
        key: element.first,
        value: element.second
      });
    });
    return this;
  }
}
