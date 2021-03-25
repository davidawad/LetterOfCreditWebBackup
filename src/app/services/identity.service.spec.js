"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var identity_service_1 = require("./identity.service");
describe('Service: Identity', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [identity_service_1.IdentityService]
        });
    });
    it('should ...', testing_1.inject([identity_service_1.IdentityService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=identity.service.spec.js.map