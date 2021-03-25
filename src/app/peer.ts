import { Serializable } from './serializable';

export class Peer implements Serializable<Peer> {
  peers: Peer[] = new Array<Peer>();
  name: string;
  locality: string;
  country: string;

  deserialize(input: any) {
    input.peers.forEach((element: string) => {
      let split = element.split(",");
      let peer = new Peer();
      peer.name = split[0].split("=")[1];
      peer.locality = split[1].split("=")[1];;
      peer.country = split[2].split("=")[1];;
      this.peers.push(peer);
    });
    return this;
  }
}
