"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var port_provider_service_1 = require("./port-provider.service");
describe('Service: PortProvider', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [port_provider_service_1.PortProviderService]
        });
    });
    it('should ...', testing_1.inject([port_provider_service_1.PortProviderService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=port-provider.service.spec.js.map