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
var status_service_1 = require("../services/status.service");
var refresh_service_1 = require("../services/refresh.service");
var material_1 = require("@angular/material");
var DashboardSellerComponent = (function () {
    function DashboardSellerComponent(modalService, tourService, cookieService, statusService, refreshService, dialogRef) {
        this.modalService = modalService;
        this.tourService = tourService;
        this.cookieService = cookieService;
        this.statusService = statusService;
        this.refreshService = refreshService;
        this.dialogRef = dialogRef;
    }
    DashboardSellerComponent.prototype.ngOnInit = function () {
        // let body = document.getElementsByTagName('body')[0];
        // body.classList.add('background-image-seller');
        var bodyWrapper = document.getElementsByClassName('mat-dialog-container')[0];
        bodyWrapper.classList.add('background-image-seller');
        var demoDone = this.cookieService.get('sellerDemoDone');
        if (demoDone !== 'true') {
            //this.tourService.sellerTour.start();
            this.cookieService.put('sellerDemoDone', 'true');
        }
    };
    return DashboardSellerComponent;
}());
DashboardSellerComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-seller',
        templateUrl: './dashboard-seller.component.html',
        styleUrls: ['./dashboard-seller.component.css']
    }),
    __metadata("design:paramtypes", [modal_1.BsModalService, tour_service_1.TourService,
        core_2.CookieService, status_service_1.StatusService,
        refresh_service_1.RefreshService, material_1.MatDialogRef])
], DashboardSellerComponent);
exports.DashboardSellerComponent = DashboardSellerComponent;
//# sourceMappingURL=dashboard-seller.component.js.map