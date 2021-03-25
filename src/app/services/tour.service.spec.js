"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tour_service_1 = require("./tour.service");
describe('Service: Tour', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [tour_service_1.TourService]
        });
    });
    it('should ...', testing_1.inject([tour_service_1.TourService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=tour.service.spec.js.map