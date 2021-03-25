"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocSummary = (function () {
    function LocSummary() {
    }
    LocSummary.prototype.deserialize = function (input) {
        this.id = input.third.props.letterOfCreditApplicationID;
        this.beneficiary = input.third.beneficiary.substring(2, input.third.beneficiary.indexOf(","));
        this.applicant = input.third.applicant.substring(2, input.third.applicant.indexOf(","));
        this.amount = input.third.props.amount;
        this.description = input.third.props.descriptionGoods[0].description;
        this.orderRef = input.third.props.descriptionGoods[0].purchaseOrderRef;
        this.status = input.third.status;
        this.advisingPayment = input.third.advisingPayment;
        this.issuingPayment = input.third.issuingPayment;
        this.buyerPayment = input.third.buyerPayment;
        return this;
    };
    return LocSummary;
}());
exports.LocSummary = LocSummary;
//# sourceMappingURL=loc-summary.js.map