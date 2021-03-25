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
var $ = require("jquery");
var identity_service_1 = require("../services/identity.service");
var dialog_1 = require("@angular/material/dialog");
var peers_with_port_component_1 = require("../peers-with-port/peers-with-port.component");
var global = require("./../globals");
var DashboardSetupComponent = (function () {
    function DashboardSetupComponent(identityService, dialog) {
        this.identityService = identityService;
        this.dialog = dialog;
        this.angleStart = -360;
        this.peerMapping = new Array();
        this.launchText = 'Begin';
    }
    DashboardSetupComponent.prototype.ngOnInit = function () {
        this.identityService.scanForPeers();
    };
    DashboardSetupComponent.prototype.ngAfterViewInit = function () {
        var angleStart = -360;
        // jquery rotate animation
        function rotate(li, d) {
            $({ d: angleStart }).animate({ d: d }, {
                step: function (now) {
                    $(li)
                        .css({ transform: 'rotate(' + now + 'deg)' })
                        .find('label')
                        .css({ transform: 'rotate(' + (-now) + 'deg)' });
                }, duration: 0
            });
        }
        // show / hide the options
        function toggleOptions(s) {
            $(s).toggleClass('open');
            var li = $(s).find('li');
            var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
            for (var i = 0; i < li.length; i++) {
                var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
                $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
            }
        }
        $('.selector button').click(function (e) {
            toggleOptions($(this).parent());
        });
    };
    DashboardSetupComponent.prototype.lookupPeer = function (role, event) {
        var _this = this;
        var dialogRef = this.dialog.open(peers_with_port_component_1.PeersWithPortComponent);
        dialogRef.backdropClick().subscribe(function (result) {
            _this.backdropClicked = true;
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (_this.backdropClicked) {
                _this.backdropClicked = false;
                return;
            }
            var mapping = _this.peerMapping.find(function (peer) { return peer.role === role; });
            if (mapping) {
                var index = _this.peerMapping.indexOf(mapping);
                if (index > -1) {
                    _this.peerMapping.splice(index, 1);
                }
            }
            _this.peerMapping.push({ role: role, port: _this.identityService.peer.port, name: _this.identityService.peer.name });
            _this.identityService.sync(_this.peerMapping);
            if (_this.peerMapping.length === 5) {
                _this.launchText = 'Launch';
                $('#launch').addClass('glow');
            }
            var target = event.target;
            $('.' + target.id).addClass('marked');
            //$('.' + target.id + '-sub').append(this.identityService.peer.name);
        });
    };
    DashboardSetupComponent.prototype.launchPage = function (role, port, event, cash) {
        if (cash === void 0) { cash = false; }
        var path;
        switch (role) {
            case global.seller:
                path = '/web/loc/seller';
                break;
            case global.buyer:
                path = '/web/loc/buyer';
                break;
            case global.advisingBank:
                if (cash) {
                    path = '/web/dashboard';
                }
                else {
                    path = '/web/loc/advising';
                }
                break;
            case global.issuingBank:
                if (cash) {
                    path = '/web/dashboard';
                }
                else {
                    path = '/web/loc/issuing';
                }
                break;
            case global.centralBank:
                path = '/web/central';
                break;
        }
        var url = 'http://localhost:' + port + path;
        var a = document.createElement('a');
        a.href = url;
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
        a.dispatchEvent(evt);
        // window.open(url, '_blank');
        var target = event.target;
        target.innerHTML = 'Launched';
    };
    DashboardSetupComponent.prototype.launch = function (event) {
        var target = event.target;
        if (target.innerHTML === 'Launch') {
            $('.wrap').toggleClass('active');
            $('.wrapper').toggleClass('hidden');
            $('.selector').fadeToggle(500);
        }
    };
    return DashboardSetupComponent;
}());
DashboardSetupComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard-setup',
        templateUrl: './dashboard-setup.component.html',
        styleUrls: ['./dashboard-setup.component.scss']
    }),
    __metadata("design:paramtypes", [identity_service_1.IdentityService, dialog_1.MatDialog])
], DashboardSetupComponent);
exports.DashboardSetupComponent = DashboardSetupComponent;
//# sourceMappingURL=dashboard-setup.component.js.map