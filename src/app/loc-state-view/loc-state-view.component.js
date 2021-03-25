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
var view_loc_state_modal_component_1 = require("./../modals/view-loc-state-modal.component");
var modal_1 = require("ngx-bootstrap/modal");
var LocStateViewComponent = (function () {
    function LocStateViewComponent(commonService, locService, modalComponent, modalService) {
        this.commonService = commonService;
        this.locService = locService;
        this.modalComponent = modalComponent;
        this.modalService = modalService;
        this.submitted = false;
    }
    LocStateViewComponent.prototype.close = function () {
        this.modalComponent.close();
    };
    LocStateViewComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.ref[0] !== undefined) {
            this.locService.getLoc(this.ref).then(function (loc) { return _this.loc = loc; });
        }
    };
    return LocStateViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LocStateViewComponent.prototype, "ref", void 0);
LocStateViewComponent = __decorate([
    core_1.Component({
        selector: 'loc-state-view',
        templateUrl: './loc-state-view.component.html',
        styleUrls: ['./loc-state-view.component.scss']
    }),
    __metadata("design:paramtypes", [common_service_1.CommonService,
        loc_service_1.LocService,
        view_loc_state_modal_component_1.ViewLocStateModalComponent,
        modal_1.BsModalService])
], LocStateViewComponent);
exports.LocStateViewComponent = LocStateViewComponent;
//# sourceMappingURL=loc-state-view.component.js.map