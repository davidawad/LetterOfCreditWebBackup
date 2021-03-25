"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocStateSummary = (function () {
    function LocStateSummary() {
    }
    LocStateSummary.prototype.deserialize = function (input) {
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
    };
    return LocStateSummary;
}());
exports.LocStateSummary = LocStateSummary;
//# sourceMappingURL=loc-state-summary.js.map