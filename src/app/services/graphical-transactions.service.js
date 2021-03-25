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
var GraphicalTransactionsService = (function () {
    function GraphicalTransactionsService() {
        this.allNodes = {};
    }
    GraphicalTransactionsService.prototype.setMarkers = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        if (nodes.length > 1) {
            this.nodesInTx = [];
            for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
                var node = nodes_1[_a];
                var name_1 = node.split(' ').join('');
                this.nodesInTx.push(this.allNodes[name_1]);
            }
        }
    };
    return GraphicalTransactionsService;
}());
GraphicalTransactionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GraphicalTransactionsService);
exports.GraphicalTransactionsService = GraphicalTransactionsService;
//# sourceMappingURL=graphical-transactions.service.js.map