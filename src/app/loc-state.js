"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocState = (function () {
    function LocState() {
    }
    LocState.prototype.deserialize = function (input) {
        this.letterOfCreditId = input.third.props.letterOfCreditID;
        this.applicationDate = input.third.props.applicationDate;
        this.issueDate = input.third.props.issueDate;
        this.typeCredit = input.third.props.typeCredit;
        this.amount = input.third.props.amount;
        // TODO: Consider converting this back to an actual Date object.
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
        // TODO: Consider converting this back to an actual Date object.
        this.lastShipmentDate = input.third.props.latestShip[0] + "-" + input.third.props.latestShip[1] + "-" + input.third.props.latestShip[2];
        this.periodPresentation = input.third.props.periodPresentation;
        // TODO: There are more robust ways to do this.
        this.beneficiary = input.third.beneficiary.substring(2, input.third.beneficiary.indexOf(","));
        this.issuer = input.third.issuingBank.substring(2, input.third.issuingBank.indexOf(","));
        this.applicant = input.third.applicant.substring(2, input.third.applicant.indexOf(","));
        this.advisingBank = input.third.advisingBank.substring(2, input.third.advisingBank.indexOf(","));
        this.beneficiaryPaid = input.third.beneficiaryPaid;
        this.advisoryPaid = input.third.advisoryPaid;
        this.issuerPaid = input.third.issuerPaid;
        this.issued = input.third.issued;
        this.terminated = input.third.terminated;
        this.status = input.third.status;
        this.txRef = input.first;
        this.signers = input.fourth;
        this.signatures = input.second;
        return this;
    };
    return LocState;
}());
exports.LocState = LocState;
//# sourceMappingURL=loc-state.js.map