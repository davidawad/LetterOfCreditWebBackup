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
var identity_service_1 = require("../services/identity.service");
var material_1 = require("@angular/material");
var PeersWithPortComponent = (function () {
    function PeersWithPortComponent(identityService, dialogRef) {
        this.identityService = identityService;
        this.dialogRef = dialogRef;
    }
    PeersWithPortComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peers = new Array();
        this.identityService.scanForPeers();
        this.peers = this.identityService.scannedPeers.filter(function (item) {
            return !_this.identityService.removedPeers.has(item);
        });
    };
    PeersWithPortComponent.prototype.setPeer = function (peer) {
        this.identityService.peer = peer;
        this.identityService.removeScannedPeer(peer);
        this.dialogRef.close();
    };
    return PeersWithPortComponent;
}());
PeersWithPortComponent = __decorate([
    core_1.Component({
        selector: 'app-peers-with-Port',
        templateUrl: './peers-with-Port.component.html',
        styleUrls: ['./peers-with-Port.component.scss']
    }),
    __metadata("design:paramtypes", [identity_service_1.IdentityService,
        material_1.MatDialogRef])
], PeersWithPortComponent);
exports.PeersWithPortComponent = PeersWithPortComponent;
//# sourceMappingURL=peers-with-port.component.js.map