"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var advising_bank_service_1 = require("./advising-bank.service");
describe('Service: ApplicantBank', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [advising_bank_service_1.AdvisingBankService]
        });
    });
    it('should ...', testing_1.inject([advising_bank_service_1.AdvisingBankService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=advising-bank.service.spec.js.map