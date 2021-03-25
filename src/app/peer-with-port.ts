import { Serializable } from './serializable';

export class PeerWithPort implements Serializable<PeerWithPort> {
  name: string;
  port: string;

  deserialize(input: any) {
    let split = input.split("|");
    this.name = split[0];
    this.port = split[1];

    return this;
  };
}
