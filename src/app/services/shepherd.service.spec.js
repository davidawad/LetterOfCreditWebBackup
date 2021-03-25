"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var shepherd_service_1 = require("./shepherd.service");
describe('Service: Shepherd', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [shepherd_service_1.ShepherdService]
        });
    });
    it('should ...', testing_1.inject([shepherd_service_1.ShepherdService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=shepherd.service.spec.js.map