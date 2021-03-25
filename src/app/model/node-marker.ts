import { CordaNode } from './corda-node';
import { Serializable } from '../serializable';

export class NodeMarker implements CordaNode, Serializable<NodeMarker> {
  id: string;
  name: string;
  address: string;
  type: string;
  lat: number;
  lng: number;

  constructor() {}

  deserialize(input: any): NodeMarker {
    const nameTypeAddress: string[] = input.title.split('|');
    this.id = input.id;
    this.name = nameTypeAddress[0].trim();
    if (nameTypeAddress.length > 2) {
      this.type = nameTypeAddress[1].trim();
      this.address = nameTypeAddress[2].trim();
    }
    this.lat = input.lat;
    this.lng = input.lng;
    return this;
  }
}
