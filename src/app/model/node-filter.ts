export class NodeFilter {
  peer: boolean;
  oracle: boolean;
  notary: boolean;
  businessNetwork: boolean;

  constructor() {
    this.peer = true;
    this.oracle = true;
    this.notary = true;
    this.businessNetwork = true;
  }

}
