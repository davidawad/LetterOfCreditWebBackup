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
var material_1 = require("@angular/material");
var port_provider_service_1 = require("../services/port-provider.service");
var CashIssuanceComponent = (function () {
    function CashIssuanceComponent(dialogRef, portService) {
        this.dialogRef = dialogRef;
        this.portService = portService;
    }
    CashIssuanceComponent.prototype.getUrl = function () {
        // TODO remove hardcoded port
        if (this.portService.current === 10019) {
            return 'http://localhost:' + this.portService.current + '/web/central/';
        }
        return 'http://localhost:' + this.portService.current + '/web/dashboard/';
    };
    return CashIssuanceComponent;
}());
CashIssuanceComponent = __decorate([
    core_1.Component({
        selector: 'app-cash-issuance',
        templateUrl: './cash-issuance.component.html',
        styleUrls: ['./cash-issuance.component.scss']
    }),
    __metadata("design:paramtypes", [material_1.MatDialogRef, port_provider_service_1.PortProviderService])
], CashIssuanceComponent);
exports.CashIssuanceComponent = CashIssuanceComponent;
//# sourceMappingURL=cash-issuance.component.js.map