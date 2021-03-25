import { Serializable } from './serializable';

export class LocStateSummary implements Serializable<LocStateSummary> {
  id: string;
  beneficiaryPaid: Boolean;
  advisoryPaid: Boolean;
  issuerPaid: Boolean;
  issued: Boolean;
  terminated: Boolean;
  beneficiary: string;
  applicant: string;
  advisory: string;
  issuer: string;
  amount: number;
  quantity: number;
  orderRef: string;
  description: string;
  status: string;
  bolAdded: boolean;
  plAdded: boolean;

  deserialize(input: any) {
    this.id = input.third.props.letterOfCreditID;
    this.beneficiaryPaid = input.third.beneficiaryPaid;
    this.advisoryPaid = input.third.advisoryPaid;
    this.issuerPaid = input.third.issuerPaid;
    this.issued = input.third.issued;
    this.terminated = input.third.terminated;

    this.beneficiary = input.third.beneficiary.substring(2, input.third.beneficiary.indexOf(","));
    this.applicant = input.third.applicant.substring(2, input.third.applicant.indexOf(","));
    this.advisory = input.third.advisingBank.substring(2, input.third.advisingBank.indexOf(","));
    this.issuer = input.third.issuingBank.substring(2, input.third.issuingBank.indexOf(","));
    this.amount = input.third.props.amount;
    this.quantity = input.third.props.descriptionGoods[0].quantity;
    this.orderRef = input.third.props.descriptionGoods[0].purchaseOrderRef;
    this.description = input.third.props.descriptionGoods[0].description;
    this.status = input.third.status;
    return this;
  }
}
