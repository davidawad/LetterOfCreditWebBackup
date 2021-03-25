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
var core_2 = require("angular2-cookie/core");
var tour_service_1 = require("../services/tour.service");
var DashboardAdvisingComponent = (function () {
    function DashboardAdvisingComponent(cookieService, tourService) {
        this.cookieService = cookieService;
        this.tourService = tourService;
    }
    DashboardAdvisingComponent.prototype.ngOnInit = function () {
        var bodyWrapper = document.getElementsByClassName('mat-dialog-container')[0];
        bodyWrapper.classList.add('background-image-advising');
        var demoDone = this.cookieService.get('advisingDemoDone');
        if (demoDone !== 'true') {
            this.tourService.advisingTour.start();
            this.cookieService.put('advisingDemoDone', 'true');
        }
    };
    return DashboardAdvisingComponent;
}());
DashboardAdvisingComponent = __decorate([
    core_1.Component({
        selector: 'dashboard-advising',
        templateUrl: './dashboard-advising.component.html',
        styleUrls: ['./dashboard-advising.component.css']
    }),
    __metadata("design:paramtypes", [core_2.CookieService, tour_service_1.TourService])
], DashboardAdvisingComponent);
exports.DashboardAdvisingComponent = DashboardAdvisingComponent;
//# sourceMappingURL=dashboard-advising.component.js.map