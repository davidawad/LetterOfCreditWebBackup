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
var view_loc_app_modal_component_1 = require("./../modals/view-loc-app-modal.component");
var refresh_service_1 = require("./../services/refresh.service");
var AwaitingApprovalComponent = (function () {
    function AwaitingApprovalComponent(locService, modalService, refreshService) {
        var _this = this;
        this.locService = locService;
        this.modalService = modalService;
        this.refreshService = refreshService;
        this.locs = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    AwaitingApprovalComponent.prototype.openLocModal = function (ref) {
        this.bsModalRef = this.modalService.show(view_loc_app_modal_component_1.ViewLocAppModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
        this.bsModalRef.content.title = 'Letter of Credit Application';
        this.bsModalRef.content.locId = ref;
        this.bsModalRef.content.readOnly = true;
    };
    AwaitingApprovalComponent.prototype.update = function () {
        var _this = this;
        this.locService.getAwaitingApprovalLocs().then(function (locs) { return _this.locs = locs; });
    };
    AwaitingApprovalComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return AwaitingApprovalComponent;
}());
AwaitingApprovalComponent = __decorate([
    core_1.Component({
        selector: 'awaiting-approval',
        templateUrl: './awaiting-approval.component.html',
        styleUrls: ['./awaiting-approval.component.css']
    }),
    __metadata("design:paramtypes", [loc_service_1.LocService,
        modal_1.BsModalService,
        refresh_service_1.RefreshService])
], AwaitingApprovalComponent);
exports.AwaitingApprovalComponent = AwaitingApprovalComponent;
//# sourceMappingURL=awaiting-approval.component.js.map