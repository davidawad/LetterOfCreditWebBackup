"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var issuing_bank_service_1 = require("./issuing-bank.service");
describe('Service: IssuingBank', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [issuing_bank_service_1.IssuingBankService]
        });
    });
    it('should ...', testing_1.inject([issuing_bank_service_1.IssuingBankService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=issuing-bank.service.spec.js.map