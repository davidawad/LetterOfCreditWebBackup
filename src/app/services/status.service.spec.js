"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var status_service_1 = require("./status.service");
describe('Service: Status', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [status_service_1.StatusService]
        });
    });
    it('should ...', testing_1.inject([status_service_1.StatusService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=status.service.spec.js.map