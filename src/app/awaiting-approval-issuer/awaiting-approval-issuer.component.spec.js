"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var awaiting_approval_issuer_component_1 = require("./awaiting-approval-issuer.component");
describe('AwaitingApprovalIssuerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [awaiting_approval_issuer_component_1.AwaitingApprovalIssuerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(awaiting_approval_issuer_component_1.AwaitingApprovalIssuerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=awaiting-approval-issuer.component.spec.js.map