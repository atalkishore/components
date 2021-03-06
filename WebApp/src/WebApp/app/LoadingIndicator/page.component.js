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
var core_1 = require('@angular/core');
//import {StatsService} from "../../services/stats-service";
var loading_component_1 = require("./loading.component");
var loadindicator_service_1 = require("./loadindicator.service");
var StatsOverviewPage = (function () {
    function StatsOverviewPage(loadingService) {
        this.loadingService = loadingService;
        this.isShow = false;
        this.stats = [];
    }
    StatsOverviewPage.prototype.onPageLoaded = function () {
        var _this = this;
        //this.isShow = !isShow
        this.loadingService.toggleLoadingIndicator(true);
        //this.loadingService.toggleLoadingIndicator(this.isShow);
        //setTimeout(2000);
        this.getDataSlowly().then(function (response) {
            _this.loadingService.toggleLoadingIndicator(false);
        });
    };
    StatsOverviewPage.prototype.getDataSlowly = function () {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(true); }, 2000); });
        // 2 seconds
    };
    StatsOverviewPage = __decorate([
        core_1.Component({
            templateUrl: "/app/LoadingIndicator/loading.html",
            directives: [loading_component_1.LoadingIndicator]
        }), 
        __metadata('design:paramtypes', [loadindicator_service_1.LoadingService])
    ], StatsOverviewPage);
    return StatsOverviewPage;
}());
exports.StatsOverviewPage = StatsOverviewPage;
//# sourceMappingURL=page.component.js.map