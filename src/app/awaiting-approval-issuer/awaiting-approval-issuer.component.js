"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var loc_service_1 = require("./../loc.service");
var modal_1 = require("ngx-bootstrap/modal");
var approve_loc_modal_component_1 = require("./../modals/approve-loc-modal.component");
var refresh_service_1 = require("./../services/refresh.service");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var global = require("../globals");
var AwaitingApprovalIssuerComponent = (function () {
    function AwaitingApprovalIssuerComponent(locService, modalService, refreshService, gtService) {
        var _this = this;
        this.locService = locService;
        this.modalService = modalService;
        this.refreshService = refreshService;
        this.gtService = gtService;
        this.locs = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    AwaitingApprovalIssuerComponent.prototype.openLocModal = function (ref) {
        this.bsModalRef = this.modalService.show(approve_loc_modal_component_1.ApproveLocModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
        this.bsModalRef.content.title = 'Letter of Credit Application';
        this.bsModalRef.content.locId = ref;
        this.bsModalRef.content.readOnly = true;
    };
    AwaitingApprovalIssuerComponent.prototype.approveLoc = function (ref) {
        var _this = this;
        this.refreshService.loading = true;
        this.gtService.setMarkers(global.advisingBankName, global.issuingBankName, global.buyerName, global.sellerName);
        this.locService.approveLoc(ref)
            .then(function (response) { return _this.callResponse(response); })
            .catch(function (err) { return err; });
    };
    AwaitingApprovalIssuerComponent.prototype.callResponse = function (result) {
        this.refreshService.confirmMission();
        this.refreshService.loading = false;
    };
    AwaitingApprovalIssuerComponent.prototype.update = function () {
        var _this = this;
        this.locService.getAwaitingApprovalLocsIssuer().then(function (locs) { return _this.locs = locs; });
    };
    AwaitingApprovalIssuerComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return AwaitingApprovalIssuerComponent;
}());
AwaitingApprovalIssuerComponent = __decorate([
    core_1.Component({
        selector: 'awaiting-approval-issuer',
        templateUrl: './awaiting-approval-issuer.component.html',
        styleUrls: ['./awaiting-approval-issuer.component.scss']
    }),
    __metadata("design:paramtypes", [loc_service_1.LocService,
        modal_1.BsModalService,
        refresh_service_1.RefreshService,
        graphical_transactions_service_1.GraphicalTransactionsService])
], AwaitingApprovalIssuerComponent);
exports.AwaitingApprovalIssuerComponent = AwaitingApprovalIssuerComponent;
//# sourceMappingURL=awaiting-approval-issuer.component.js.map