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
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var refresh_service_1 = require("../services/refresh.service");
var GraphicalTransactionsComponent = (function () {
    function GraphicalTransactionsComponent(gtService, refreshService) {
        var _this = this;
        this.gtService = gtService;
        this.refreshService = refreshService;
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.perform();
        });
    }
    GraphicalTransactionsComponent.prototype.perform = function () {
        if (this.gtService.nodesInTx.length > 1) {
            var startNode = this.gtService.nodesInTx[0];
            var startStyling = startNode.nativeElement.attributes.style.nodeValue.split(';');
            var x1 = this.extractStyle(startStyling[1]);
            var y1 = this.extractStyle(startStyling[0]);
            for (var x = 1; x < this.gtService.nodesInTx.length; x++) {
                var endNode = this.gtService.nodesInTx[x];
                var endStyling = endNode.nativeElement.attributes.style.nodeValue.split(';');
                var x2 = this.extractStyle(endStyling[1]);
                var y2 = this.extractStyle(endStyling[0]);
                if (this.gtService.cash) {
                    this.sendCash(x1, y1, x2, y2);
                    this.gtService.cash = false;
                }
                else {
                    this.sendContract(x1, y1, x2, y2);
                }
            }
            this.fade();
        }
        this.gtService.nodesInTx = [];
    };
    GraphicalTransactionsComponent.prototype.fade = function () {
        $('#map').animate({ opacity: 0.3 }, 500);
        setTimeout(function () { return $('#map').animate({ opacity: 1 }, 1000); }, 3300);
        $('.mat-dialog-container').fadeToggle();
        setTimeout(function () { return $('.mat-dialog-container').fadeToggle(); }, 4000);
    };
    GraphicalTransactionsComponent.prototype.extractStyle = function (style) {
        var startPoint = style.indexOf(':') + 1;
        var endPoint = style.indexOf('%');
        var result = style.substring(startPoint, endPoint);
        return result;
    };
    GraphicalTransactionsComponent.prototype.sendContract = function (x1, y1, x2, y2) {
        var contract = $('<img src="assets/diploma.svg">')
            .appendTo('#page')
            .addClass('contract')
            .css({
            'position': 'absolute',
            'top': (y1 * 0.98) + '%',
            'left': (x1 * 0.98) + '%',
            'width': 0,
            'height': 0
        });
        var y = y2 - y1;
        var x = x2 - x1;
        contract.animate({ width: 50, height: 50 }, 500);
        contract.animate({
            'top': '+=' + y + '%',
            'left': '+=' + x + '%'
        }, 2000).animate({ width: 0, height: 0 }, 400);
    };
    GraphicalTransactionsComponent.prototype.sendCash = function (x1, y1, x2, y2) {
        var contract = $('<img src="assets/cash.png">')
            .appendTo('#page')
            .addClass('contract')
            .css({
            'position': 'absolute',
            'top': (y1 * 0.98) + '%',
            'left': (x1 * 0.98) + '%',
            'width': 0,
            'height': 0
        });
        var y = y2 - y1;
        var x = x2 - x1;
        contract.animate({ width: 50, height: 50 }, 500);
        contract.animate({
            'top': '+=' + y + '%',
            'left': '+=' + x + '%'
        }, 2000).animate({ width: 0, height: 0 }, 400);
    };
    GraphicalTransactionsComponent.prototype.createLine = function (x1, y1, x2, y2) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        var angle = Math.atan2(h * ((y2 - y1) / 100), (w * (x2 - x1) / 100)) * 180 / Math.PI;
        var transform = 'rotate(' + angle + 'deg)';
        var line = $('<div>')
            .appendTo('#page')
            .addClass('line')
            .css({
            'position': 'absolute',
            'transform': transform,
            'height': '3px',
            'background-color': 'rgba(255, 255, 255, 0.4)'
        })
            .width((length - 2) + '%')
            .offset({ left: w * (x1 / 100), top: h * (y1 / 100) + 50 });
        line.fadeOut(4000);
    };
    return GraphicalTransactionsComponent;
}());
GraphicalTransactionsComponent = __decorate([
    core_1.Component({
        selector: 'app-graphical-transactions',
        templateUrl: './graphical-transactions.component.html',
        styleUrls: ['./graphical-transactions.component.scss']
    }),
    __metadata("design:paramtypes", [graphical_transactions_service_1.GraphicalTransactionsService, refresh_service_1.RefreshService])
], GraphicalTransactionsComponent);
exports.GraphicalTransactionsComponent = GraphicalTransactionsComponent;
//# sourceMappingURL=graphical-transactions.component.js.map