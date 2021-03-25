import { Serializable } from './serializable';

export class Party implements Serializable<Party> {
  name: string;

  deserialize(input: any) {
    this.name = input.me;
    return this;
  }

  deserializeName(input: any) {
    this.name = input;
    return this;
  }
}
