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
var LocAppViewComponent = (function () {
    function LocAppViewComponent(locService, modalComponent, modalService) {
        this.locService = locService;
        this.modalComponent = modalComponent;
        this.modalService = modalService;
    }
    LocAppViewComponent.prototype.close = function () {
        this.modalComponent.close();
    };
    LocAppViewComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.ref[0] !== undefined) {
            this.locService.getLocApp(this.ref).then(function (loc) { return _this.loc = loc; });
        }
    };
    return LocAppViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LocAppViewComponent.prototype, "ref", void 0);
LocAppViewComponent = __decorate([
    core_1.Component({
        selector: 'loc-app-view',
        templateUrl: './loc-app-view.component.html',
        styleUrls: ['./loc-app-view.component.scss']
    }),
    __metadata("design:paramtypes", [loc_service_1.LocService,
        view_loc_app_modal_component_1.ViewLocAppModalComponent,
        modal_1.BsModalService])
], LocAppViewComponent);
exports.LocAppViewComponent = LocAppViewComponent;
//# sourceMappingURL=loc-app-view.component.js.map