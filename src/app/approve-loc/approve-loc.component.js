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
var common_service_1 = require("./../services/common/common.service");
var loc_service_1 = require("./../loc.service");
var approve_loc_modal_component_1 = require("./../modals/approve-loc-modal.component");
var modal_1 = require("ngx-bootstrap/modal");
var status_service_1 = require("../services/status.service");
var refresh_service_1 = require("../services/refresh.service");
var ApproveLocComponent = (function () {
    function ApproveLocComponent(commonService, locService, modalComponent, modalService, statusService, refreshService) {
        this.commonService = commonService;
        this.locService = locService;
        this.modalComponent = modalComponent;
        this.modalService = modalService;
        this.statusService = statusService;
        this.refreshService = refreshService;
        this.submitted = false;
    }
    ApproveLocComponent.prototype.close = function () {
        this.modalComponent.close();
    };
    ApproveLocComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.ref[0] !== undefined) {
            this.locService.getLocApp(this.ref).then(function (loc) { return _this.loc = loc; });
        }
    };
    return ApproveLocComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ApproveLocComponent.prototype, "ref", void 0);
ApproveLocComponent = __decorate([
    core_1.Component({
        selector: 'approve-loc',
        templateUrl: './approve-loc.component.html',
        styleUrls: ['./approve-loc.component.css'],
        providers: [loc_service_1.LocService]
    }),
    __metadata("design:paramtypes", [common_service_1.CommonService,
        loc_service_1.LocService,
        approve_loc_modal_component_1.ApproveLocModalComponent,
        modal_1.BsModalService,
        status_service_1.StatusService,
        refresh_service_1.RefreshService])
], ApproveLocComponent);
exports.ApproveLocComponent = ApproveLocComponent;
//# sourceMappingURL=approve-loc.component.js.map