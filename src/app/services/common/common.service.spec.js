"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var common_service_1 = require("./common.service");
describe('Service: Currency', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [common_service_1.CommonService]
        });
    });
    it('should ...', testing_1.inject([common_service_1.CommonService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=common.service.spec.js.map