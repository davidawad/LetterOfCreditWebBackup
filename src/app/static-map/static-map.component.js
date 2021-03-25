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
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var dashboard_seller_component_1 = require("../dashboard-seller/dashboard-seller.component");
var port_provider_service_1 = require("../services/port-provider.service");
var identity_service_1 = require("../services/identity.service");
var dashboard_buyer_component_1 = require("../dashboard-buyer/dashboard-buyer.component");
var dashboard_advising_component_1 = require("../dashboard-advising/dashboard-advising.component");
var dashboard_issuer_component_1 = require("../dashboard-issuer/dashboard-issuer.component");
var cash_issuance_component_1 = require("../cash-issuance/cash-issuance.component");
var refresh_service_1 = require("../services/refresh.service");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var global = require("./../globals");
var StaticMapComponent = (function () {
    function StaticMapComponent(router, dialog, portService, identityService, refreshService, gtService) {
        this.router = router;
        this.dialog = dialog;
        this.portService = portService;
        this.identityService = identityService;
        this.refreshService = refreshService;
        this.gtService = gtService;
        this.expandTxt = '>';
        this.shrinkTxt = '<';
        this.buttonTxt = this.expandTxt;
        this.unfolded = false;
        this.names = global;
    }
    StaticMapComponent.prototype.ngOnInit = function () {
        // Increments the delay on each item.
        $('.rolldown-list li').each(function () {
            var delay = ($(this).index() / 4) + 's';
            $(this).css({
                webkitAnimationDelay: delay,
                mozAnimationDelay: delay,
                animationDelay: delay
            });
        });
        var totalHeight = 0, dropDownHeight = $('.dropdown-menu').outerHeight();
        $('.dropdown-menu').children().each(function () {
            totalHeight = totalHeight + $(this).outerHeight(true);
        });
        $('.trig').click(function () {
            if (dropDownHeight === 0) {
                $('.dropdown-menu').css('height', totalHeight + 'px');
                dropDownHeight = totalHeight;
            }
            else {
                $('.dropdown-menu').css('height', '0');
                dropDownHeight = 0;
            }
        });
        this.gtService.allNodes[this.names.buyerName] = this.markerBuyer;
        this.gtService.allNodes[this.names.sellerName] = this.markerSeller;
        this.gtService.allNodes[this.names.issuingBankName] = this.markerIssuing;
        this.gtService.allNodes[this.names.advisingBankName] = this.markerAdvising;
    };
    StaticMapComponent.prototype.launch = function () {
        var _this = this;
        $('#loan').toggle();
        setTimeout(function () { return _this.expandMenu(); }, 300);
        setTimeout(function () { return $('#map-legend').fadeToggle({ duration: 1000 }); }, 1500);
        setTimeout(function () { return $('#other-markers').fadeToggle({ duration: 1500 }); }, 2000);
    };
    StaticMapComponent.prototype.expandMenu = function () {
        $(this).toggleClass('change');
        $('.sidenav').toggleClass('sidenav-toggle');
        $('.container').toggleClass('container-toggle');
        if (!this.unfolded) {
            $('#myList').removeClass('rolldown-list');
            setTimeout(function () {
                $('#myList').addClass('rolldown-list');
            }, 1);
            this.unfolded = true;
        }
        if (this.buttonTxt === this.expandTxt) {
            this.buttonTxt = this.shrinkTxt;
        }
        else {
            this.buttonTxt = this.expandTxt;
        }
    };
    StaticMapComponent.prototype.launchSeller = function () {
        this.portService.current = 10014;
        this.identityService.current = 'seller';
        this.dialog.open(dashboard_seller_component_1.DashboardSellerComponent, { width: '85%', height: '85%' });
    };
    StaticMapComponent.prototype.launchBuyer = function () {
        this.portService.current = 10017;
        this.identityService.current = 'buyer';
        this.dialog.open(dashboard_buyer_component_1.DashboardBuyerComponent, { width: '85%', height: '85%' });
    };
    StaticMapComponent.prototype.launchAdvising = function () {
        this.portService.current = 10020;
        this.identityService.current = 'advising';
        this.dialog.open(dashboard_advising_component_1.DashboardAdvisingComponent, { width: '85%', height: '85%' });
    };
    StaticMapComponent.prototype.launchIssuing = function () {
        this.portService.current = 10023;
        this.identityService.current = 'issuing';
        this.dialog.open(dashboard_issuer_component_1.DashboardIssuerComponent, { width: '85%', height: '85%' });
    };
    StaticMapComponent.prototype.launchCentral = function () {
        this.portService.current = 10011;
        this.dialog.open(cash_issuance_component_1.CashIssuanceComponent, { width: '85%', height: '85%' });
    };
    StaticMapComponent.prototype.launchAdvisingCash = function () {
        this.portService.current = 10020;
        this.dialog.open(cash_issuance_component_1.CashIssuanceComponent, { width: '85%', height: '85%' });
    };
    StaticMapComponent.prototype.launchIssuingCash = function () {
        this.portService.current = 10023;
        this.dialog.open(cash_issuance_component_1.CashIssuanceComponent, { width: '85%', height: '85%' });
    };
    StaticMapComponent.prototype.launchNotary = function () {
        this.portService.current = 10004;
    };
    return StaticMapComponent;
}());
__decorate([
    core_1.ViewChild('map'),
    __metadata("design:type", Object)
], StaticMapComponent.prototype, "map", void 0);
__decorate([
    core_1.ViewChild('markerBuyer'),
    __metadata("design:type", Object)
], StaticMapComponent.prototype, "markerBuyer", void 0);
__decorate([
    core_1.ViewChild('markerSeller'),
    __metadata("design:type", Object)
], StaticMapComponent.prototype, "markerSeller", void 0);
__decorate([
    core_1.ViewChild('markerAdvising'),
    __metadata("design:type", Object)
], StaticMapComponent.prototype, "markerAdvising", void 0);
__decorate([
    core_1.ViewChild('markerIssuing'),
    __metadata("design:type", Object)
], StaticMapComponent.prototype, "markerIssuing", void 0);
__decorate([
    core_1.ViewChild('markerNotary'),
    __metadata("design:type", Object)
], StaticMapComponent.prototype, "markerNotary", void 0);
StaticMapComponent = __decorate([
    core_1.Component({
        selector: 'app-static-map',
        templateUrl: './static-map.component.html',
        styleUrls: ['./static-map.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router, material_1.MatDialog,
        port_provider_service_1.PortProviderService, identity_service_1.IdentityService,
        refresh_service_1.RefreshService, graphical_transactions_service_1.GraphicalTransactionsService])
], StaticMapComponent);
exports.StaticMapComponent = StaticMapComponent;
//# sourceMappingURL=static-map.component.js.map