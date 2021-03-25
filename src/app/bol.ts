import { Serializable } from './serializable';

export class Bol implements Serializable<Bol> {

  public owner: string;

  public billOfLadingId: string;
  public issueDate: Date;
  public carrierOwner: string;

  public nameOfVessel: string;
  public goodsDescription: string;
  public goodsQuantity: number;
  public dateOfShipment: Date;

  public portOfLoadingCountry: string;
  public portOfLoadingCity: string;
  public portOfLoadingAddress: string;

  public portOfDischargeCountry: string;
  public portOfDischargeCity: string;
  public portOfDischargeAddress: string;

  public shipper: string;
  public notifyName: string;
  public notifyAddress: string;
  public notifyPhone: string;

  public consigneeName: string;
  public consigneeAddress: string;
  public consigneePhone: string;

  public grossWeight: number;
  public grossWeightUnit: string;

  public placeOfReceiptCountry: string;
  public placeOfReceiptCity: string;

  public buyer: string;
  public advisingBank: string;
  public issuingBank: string;

  public transactionHash: string;
  public signers: String[];
  public signatures: String[];

  deserialize(input: any) {
    this.owner = input.third.owner;

    this.billOfLadingId = input.third.props.billOfLadingID;
    this.issueDate = input.third.props.issueDate;
    this.carrierOwner = input.third.props.carrierOwner;

    this.nameOfVessel = input.third.props.nameOfVessel;
    this.goodsDescription = input.third.props.descriptionOfGoods[0].description;
    this.goodsQuantity = input.third.props.descriptionOfGoods[0].quantity;
    this.dateOfShipment = input.third.props.dateOfShipment;

    this.portOfLoadingCountry = input.third.props.portOfLoading.country;
    this.portOfLoadingCity = input.third.props.portOfLoading.city;
    this.portOfLoadingAddress = input.third.props.portOfLoading.address;

    this.portOfDischargeCountry = input.third.props.portOfDischarge.country;
    this.portOfDischargeCity = input.third.props.portOfDischarge.city;
    this.portOfDischargeAddress = input.third.props.portOfDischarge.address;

    this.shipper = input.third.props.carrierOwner;
    this.notifyName = input.third.props.notify.name;
    this.notifyAddress = input.third.props.notify.address;
    this.notifyPhone = input.third.props.notify.phone;

    this.consigneeName = input.third.props.consignee.name;
    this.consigneeAddress = input.third.props.consignee.address;
    this.consigneePhone = input.third.props.consignee.phone;

    this.grossWeight = input.third.props.grossWeight.quantity;
    this.grossWeightUnit = input.third.props.grossWeight.unit;

    this.placeOfReceiptCountry = input.third.props.placeOfReceipt.country;
    this.placeOfReceiptCity = input.third.props.placeOfReceipt.city;

    this.buyer = input.third.beneficiary;

    this.transactionHash = input.first;
    this.signers = input.fourth;
    this.signatures = input.second;

    return this;
  }

}
