"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var url_provider_service_1 = require("./url-provider.service");
describe('Service: UrlProvider', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [url_provider_service_1.UrlProviderService]
        });
    });
    it('should ...', testing_1.inject([url_provider_service_1.UrlProviderService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=url-provider.service.spec.js.map