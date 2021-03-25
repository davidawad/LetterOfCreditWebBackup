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
var modal_1 = require("ngx-bootstrap/modal");
var core_2 = require("angular2-cookie/core");
var tour_service_1 = require("../services/tour.service");
var DashboardBuyerComponent = (function () {
    function DashboardBuyerComponent(modalService, cookieService, tourService) {
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.tourService = tourService;
    }
    DashboardBuyerComponent.prototype.ngOnInit = function () {
        // let body = document.getElementsByTagName('body')[0];
        // body.classList.add('background-image-buyer');
        var bodyWrapper = document.getElementsByClassName('mat-dialog-container')[0];
        bodyWrapper.classList.add('background-image-buyer');
        var demoDone = this.cookieService.get('buyerDemoDone');
        if (demoDone !== 'true') {
            this.tourService.buyerTour.start();
            this.cookieService.put('buyerDemoDone', 'true');
        }
    };
    return DashboardBuyerComponent;
}());
DashboardBuyerComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-buyer',
        templateUrl: './dashboard-buyer.component.html',
        styleUrls: ['./dashboard-buyer.component.css']
    }),
    __metadata("design:paramtypes", [modal_1.BsModalService, core_2.CookieService,
        tour_service_1.TourService])
], DashboardBuyerComponent);
exports.DashboardBuyerComponent = DashboardBuyerComponent;
//# sourceMappingURL=dashboard-buyer.component.js.map