import { Serializable } from './serializable'

export class Cash implements Serializable<Cash> {
  currency: string;
  amount: number;

  deserialize(input: any) {
    let temp =  input.USD;
    this.currency = Object.keys(input)[0];
    this.amount = temp.substring(0, temp.length - 7);
    return this;
  }
}
