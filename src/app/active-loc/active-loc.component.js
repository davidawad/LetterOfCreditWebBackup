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
var view_bol_modal_component_1 = require("./../modals/view-bol-modal.component");
var modal_1 = require("ngx-bootstrap/modal");
var router_1 = require("@angular/router");
var refresh_service_1 = require("./../services/refresh.service");
var view_loc_state_modal_component_1 = require("./../modals/view-loc-state-modal.component");
var status_service_1 = require("../services/status.service");
var global = require("../globals");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var ActiveLocComponent = (function () {
    function ActiveLocComponent(modalService, locService, refreshService, route, statusService, gtService) {
        var _this = this;
        this.modalService = modalService;
        this.locService = locService;
        this.refreshService = refreshService;
        this.route = route;
        this.statusService = statusService;
        this.gtService = gtService;
        this.disabled = false;
        this.locs = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    ActiveLocComponent.prototype.payAdvisory = function (id) {
        var _this = this;
        this.refreshService.loading = true;
        this.disabled = true;
        this.locService.payAdviser(id)
            .then(function (response) { return _this.callResponse(response); })
            .catch(function (err) { return err; });
    };
    ActiveLocComponent.prototype.openBol = function (id) {
        this.bsModalRef = this.modalService.show(view_bol_modal_component_1.ViewBolModalComponent);
        this.bsModalRef.content.id = id;
        this.bsModalRef.content.title = 'Bill of Lading';
        this.bsModalRef.content.requestor = this.route.snapshot.url[0].toString();
    };
    ActiveLocComponent.prototype.openLocModal = function (ref) {
        this.bsModalRef = this.modalService.show(view_loc_state_modal_component_1.ViewLocStateModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
        this.bsModalRef.content.title = 'Letter of Credit';
        this.bsModalRef.content.locId = ref;
    };
    ActiveLocComponent.prototype.callResponse = function (result) {
        this.refreshService.loading = false;
        this.gtService.setMarkers(global.issuingBankName, global.advisingBankName);
        this.gtService.cash = true;
        this.refreshService.confirmMission();
        this.statusService.status = result;
        this.update();
        this.disabled = false;
    };
    ActiveLocComponent.prototype.update = function () {
        var _this = this;
        this.locService.getActiveLocs().then(function (locs) { return _this.locs = locs; });
    };
    ActiveLocComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return ActiveLocComponent;
}());
ActiveLocComponent = __decorate([
    core_1.Component({
        selector: 'active-loc',
        templateUrl: './active-loc.component.html',
        styleUrls: ['./active-loc.component.css']
    }),
    __metadata("design:paramtypes", [modal_1.BsModalService,
        loc_service_1.LocService,
        refresh_service_1.RefreshService,
        router_1.ActivatedRoute,
        status_service_1.StatusService,
        graphical_transactions_service_1.GraphicalTransactionsService])
], ActiveLocComponent);
exports.ActiveLocComponent = ActiveLocComponent;
//# sourceMappingURL=active-loc.component.js.map