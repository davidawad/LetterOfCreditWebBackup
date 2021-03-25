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
var peer_1 = require("../peer");
var material_1 = require("@angular/material");
var peer_with_port_1 = require("../peer-with-port");
var PeersComponent = (function () {
    function PeersComponent(identityService, dialogRef) {
        this.identityService = identityService;
        this.dialogRef = dialogRef;
    }
    PeersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peers = new Array();
        this.identityService.getPeers().then(function (response) { return _this.peers = new peer_1.Peer().deserialize(response.json()).peers; });
    };
    PeersComponent.prototype.setPeer = function (name) {
        this.identityService.peer = new peer_with_port_1.PeerWithPort();
        this.identityService.peer.name = name;
        this.dialogRef.close();
    };
    return PeersComponent;
}());
PeersComponent = __decorate([
    core_1.Component({
        selector: 'app-peers',
        templateUrl: './peers.component.html',
        styleUrls: ['./peers.component.scss']
    }),
    __metadata("design:paramtypes", [identity_service_1.IdentityService,
        material_1.MatDialogRef])
], PeersComponent);
exports.PeersComponent = PeersComponent;
//# sourceMappingURL=peers.component.js.map