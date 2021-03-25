import { Serializable } from './serializable';

export class Stats implements Serializable<Stats> {
  public awaitingApproval: number;
  public active: number;
  public awaitingPayment: number;

  deserialize(input: any) {
    this.awaitingApproval = input.awaitingApproval;
    this.active = input.active;
    this.awaitingPayment = input.awaitingPayment
    return this;
  }
}
