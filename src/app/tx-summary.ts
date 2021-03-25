import { Serializable } from './serializable';

export class TxSummary implements Serializable<TxSummary> {
  hash: string;
  inputs: string[];
  outputs: string[];
  signers: string[];

  deserialize(input: any) {
    this.hash = input.hash.substring(0, 8);
    this.inputs = input.inputs;
    this.outputs = input.outputs;
    this.signers = input.signers;
    return this;
  }
}
