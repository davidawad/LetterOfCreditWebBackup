"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bol = (function () {
    function Bol() {
    }
    Bol.prototype.deserialize = function (input) {
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
    };
    return Bol;
}());
exports.Bol = Bol;
//# sourceMappingURL=bol.js.map