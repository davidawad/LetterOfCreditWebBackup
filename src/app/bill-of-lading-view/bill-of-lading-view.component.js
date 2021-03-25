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
var docs_service_1 = require("./../services/docs.service");
var view_bol_modal_component_1 = require("./../modals/view-bol-modal.component");
var modal_1 = require("ngx-bootstrap/modal");
var BillOfLadingViewComponent = (function () {
    function BillOfLadingViewComponent(docsService, modalComponent, modalService) {
        this.docsService = docsService;
        this.modalComponent = modalComponent;
        this.modalService = modalService;
    }
    BillOfLadingViewComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.id[0] !== undefined) {
            this.docsService.getBol(this.id, this.requestor).then(function (bol) { return _this.bol = bol; });
        }
    };
    return BillOfLadingViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BillOfLadingViewComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BillOfLadingViewComponent.prototype, "requestor", void 0);
BillOfLadingViewComponent = __decorate([
    core_1.Component({
        selector: 'bill-of-lading-view',
        templateUrl: './bill-of-lading-view.component.html',
        styleUrls: ['./bill-of-lading-view.component.scss']
    }),
    __metadata("design:paramtypes", [docs_service_1.DocsService,
        view_bol_modal_component_1.ViewBolModalComponent,
        modal_1.BsModalService])
], BillOfLadingViewComponent);
exports.BillOfLadingViewComponent = BillOfLadingViewComponent;
//# sourceMappingURL=bill-of-lading-view.component.js.map