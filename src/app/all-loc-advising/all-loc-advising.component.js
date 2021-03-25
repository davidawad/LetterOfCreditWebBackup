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
var docs_modal_component_1 = require("./../modals/docs-modal.component");
var view_bol_modal_component_1 = require("./../modals/view-bol-modal.component");
var view_loc_state_modal_component_1 = require("./../modals/view-loc-state-modal.component");
var status_service_1 = require("../services/status.service");
var refresh_service_1 = require("../services/refresh.service");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var global = require("../globals");
var AllLocAdvisingComponent = (function () {
    function AllLocAdvisingComponent(modalService, locService, statusService, refreshService, gtService) {
        var _this = this;
        this.modalService = modalService;
        this.locService = locService;
        this.statusService = statusService;
        this.refreshService = refreshService;
        this.gtService = gtService;
        this.locs = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    AllLocAdvisingComponent.prototype.openModalWithComponent = function () {
        this.bsModalRef = this.modalService.show(docs_modal_component_1.DocsModalComponent);
        this.bsModalRef.content.title = 'Documents';
    };
    AllLocAdvisingComponent.prototype.openLocModal = function (ref) {
        this.bsModalRef = this.modalService.show(view_loc_state_modal_component_1.ViewLocStateModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
        this.bsModalRef.content.title = 'Letter of Credit';
        this.bsModalRef.content.locId = ref;
    };
    AllLocAdvisingComponent.prototype.openBol = function (id) {
        this.bsModalRef = this.modalService.show(view_bol_modal_component_1.ViewBolModalComponent);
        this.bsModalRef.content.id = id;
        this.bsModalRef.content.title = 'Bill of Lading';
    };
    AllLocAdvisingComponent.prototype.callResponse = function (result) {
        this.refreshService.loading = false;
        this.statusService.status = result;
        this.gtService.setMarkers(global.advisingBankName, global.sellerName);
        // TODO make more generic
        this.gtService.cash = true;
        this.refreshService.confirmMission();
        this.update();
    };
    AllLocAdvisingComponent.prototype.paySeller = function (id) {
        var _this = this;
        this.refreshService.loading = true;
        this.locService.paySeller(id)
            .then(function (response) { return _this.callResponse(response); })
            .catch(function (err) { return err; });
    };
    AllLocAdvisingComponent.prototype.update = function () {
        var _this = this;
        this.locService.getActiveLocs().then(function (locs) { return _this.locs = locs; });
    };
    AllLocAdvisingComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return AllLocAdvisingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AllLocAdvisingComponent.prototype, "getAllUrl", void 0);
AllLocAdvisingComponent = __decorate([
    core_1.Component({
        selector: 'all-loc-advising',
        templateUrl: './all-loc-advising.component.html',
        styleUrls: ['./all-loc-advising.component.css']
    }),
    __metadata("design:paramtypes", [modal_1.BsModalService,
        loc_service_1.LocService,
        status_service_1.StatusService,
        refresh_service_1.RefreshService,
        graphical_transactions_service_1.GraphicalTransactionsService])
], AllLocAdvisingComponent);
exports.AllLocAdvisingComponent = AllLocAdvisingComponent;
//# sourceMappingURL=all-loc-advising.component.js.map