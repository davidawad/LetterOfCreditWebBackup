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
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
        var snapPing = Snap('#svgPing');
        // Path
        var pathPing = snapPing.path('M439.64 272.29L435.1 282.14L432.07 291.98L427.53 304.1L424.5 318.49L420.71 331.36L416.93 341.96L412.38 351.05L407.84 360.13L401.78 370.73L396.48 379.82L391.18 388.91L379.06 400.27L357.86 411.63L345.75 417.68L336.66 422.23L326.06 423.74L313.94 425.26L303.34 425.26L294.25 420.71L282.14 413.9L272.29 404.81L265.48 394.21L260.94 385.12L258.66 375.28L257.91 364.68L260.18 350.29L262.45 339.69L265.48 327.57L266.24 315.46L266.24 304.86L262.45 293.5L257.91 284.41L250.33 277.59L241.25 271.54L233.67 263.21L225.35 255.63L218.53 247.31L215.5 236.7L217.02 222.32L219.29 211.71L224.59 200.36L230.65 189.76L236.7 181.43L245.79 173.85L254.88 167.8L262.45 159.47L270.78 152.65L279.11 145.08L289.71 138.26L298.8 132.96L307.88 128.42L321.51 122.36L332.87 116.3').attr({
            id: 'squiggle',
            fill: 'none',
            strokeWidth: '2',
            stroke: '#ffffff',
            strokeMiterLimit: '10',
            strokeDasharray: '9 9',
            strokeDashOffset: '988.01'
        });
        var length = pathPing.getTotalLength();
        // Animate Path
        pathPing.attr({
            // Draw Path
            'stroke-dasharray': length + ' ' + length,
            'stroke-dashoffset': length
        });
        pathPing.animate({
            'stroke-dashoffset': 0
        }, 3000, mina.easeinout, function () { second(); });
        function second() {
            pathPing.animate({ 'stroke-dashoffset': -length }, 1000, mina.easeinout);
        }
        // Ship (As Polyline)
        var Ship = snapPing.path('M 42.761719 33.027344 C 43.339844 33.34375 43.730469 33.953125 43.730469 34.65625 C 43.730469 34.894531 43.6875 35.117188 43.609375 35.328125 L 7 35.328125 L 3.222656 29.9375 C 3.011719 29.636719 2.886719 29.273438 2.886719 28.878906 C 2.886719 28.476562 3.015625 28.105469 3.230469 27.800781 L 14.089844 27.800781 L 15.375 29.085938 L 37.308594 29.085938 L 41.855469 26.464844 L 47.023438 26.464844 Z M 31.960938 19.730469 L 38.339844 19.730469 L 38.339844 23.132812 L 31.960938 23.132812 Z M 16.648438 24.410156 L 23.027344 24.410156 L 23.027344 27.8125 L 16.648438 27.8125 Z M 24.304688 24.410156 L 30.683594 24.410156 L 30.683594 27.8125 L 24.304688 27.8125 Z M 31.960938 24.410156 L 38.339844 24.410156 L 38.339844 27.019531 L 36.96875 27.8125 L 31.960938 27.8125 Z M 16.648438 19.730469 L 23.027344 19.730469 L 23.027344 23.132812 L 16.648438 23.132812 Z M 24.304688 19.730469 L 30.683594 19.730469 L 30.683594 23.132812 L 24.304688 23.132812 Z M 6.632812 18.914062 L 13.4375 18.914062 L 13.4375 20.1875 L 11.964844 20.1875 L 11.964844 26.523438 L 5.355469 26.523438 L 5.355469 16.359375 L 8.203125 16.359375 L 8.203125 15.355469 L 11.964844 13.808594 L 11.964844 16.359375 L 13.4375 16.359375 L 13.4375 17.636719 L 6.632812 17.636719 Z M 6.632812 18.914062');
        Ship.attr({
            id: 'plane',
            fill: '#fff'
        });
        var shipGroup = snapPing.g(Ship); // Group polyline
        setTimeout(function () {
            Snap.animate(0, length, function (value) {
                var movePoint = pathPing.getPointAtLength(value);
                shipGroup.transform('t' + (movePoint.x - 15) + ',' + (movePoint.y - 60) + 'r' + 0);
            }, 3000, mina.easeinout);
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'app-test',
        templateUrl: './test.component.html',
        styleUrls: ['./test.component.scss']
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map