"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loc = (function () {
    function Loc() {
    }
    Loc.prototype.deserialize = function (input) {
        this.applicationId = input.third.props.letterOfCreditApplicationID;
        this.applicationDate = input.third.props.applicationDate;
        this.typeCredit = input.third.props.typeCredit;
        this.amount = input.third.props.amount;
        // TODO: Store this as an actual date.
        this.expiryDate = input.third.props.expiryDate[0] + "-" + input.third.props.expiryDate[1] + "-" + input.third.props.expiryDate[2];
        this.portLoadingCountry = input.third.props.portLoading.country;
        this.portLoadingCity = input.third.props.portLoading.city;
        this.portLoadingAddress = input.third.props.portLoading.address;
        this.portDischargeCountry = input.third.props.portDischarge.country;
        this.portDischargeCity = input.third.props.portDischarge.city;
        this.portDischargeAddress = input.third.props.portDischarge.address;
        this.goodsDescription = input.third.props.descriptionGoods[0].description;
        this.goodsQuantity = input.third.props.descriptionGoods[0].quantity;
        this.goodsWeight = input.third.props.descriptionGoods[0].grossWeight.quantity;
        this.goodsWeightUnit = input.third.props.descriptionGoods[0].grossWeight.unit;
        this.goodsUnitPrice = input.third.props.descriptionGoods[0].unitPrice;
        this.goodsPurchaseOrderRef = input.third.props.descriptionGoods[0].purchaseOrderRef;
        this.placePresentationCountry = input.third.props.placePresentation.country;
        this.placePresentationState = input.third.props.placePresentation.state;
        this.placePresentationCity = input.third.props.placePresentation.city;
        // TODO: Store this as an actual date.
        this.lastShipmentDate = input.third.props.lastShipmentDate[0] + "-" + input.third.props.lastShipmentDate[1] + "-" + input.third.props.lastShipmentDate[2];
        this.periodPresentation = input.third.props.periodPresentation;
        this.beneficiary = input.third.beneficiary.substring(2, input.third.beneficiary.indexOf(","));
        this.issuer = input.third.issuer.substring(2, input.third.issuer.indexOf(","));
        this.applicant = input.third.applicant.substring(2, input.third.applicant.indexOf(","));
        this.advisingBank = input.third.advisingBank.substring(2, input.third.advisingBank.indexOf(","));
        this.status = input.third.status;
        this.txRef = input.first;
        this.signers = input.fourth;
        this.signatures = input.second;
        return this;
    };
    return Loc;
}());
exports.Loc = Loc;
//# sourceMappingURL=loc.js.map