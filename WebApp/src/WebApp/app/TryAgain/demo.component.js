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
var TryAgainPage = (function () {
    function TryAgainPage() {
        this.isShow = true;
        this.stats = [];
    }
    TryAgainPage.prototype.onPageLoaded = function () {
        var _this = this;
        //this.isShow = !isShow
        this.isShow = false;
        //this.loadingService.toggleLoadingIndicator(this.isShow);
        //setTimeout(2000);
        this.getDataSlowly().then(function (response) {
            _this.isShow = true;
        });
    };
    TryAgainPage.prototype.TryAgain = function () {
        this.onPageLoaded();
    };
    TryAgainPage.prototype.getDataSlowly = function () {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(true); }, 3000); });
        // 2 seconds
    };
    TryAgainPage = __decorate([
        core_1.Component({
            template: "<div [style.visibility]=\"isShow ? 'visible': 'hidden'\" class=\"loading-indicator-container\">\n       <button class=\"btn btn-primary\" (click)=\"TryAgain()\" >Try again</button></div>",
        }), 
        __metadata('design:paramtypes', [])
    ], TryAgainPage);
    return TryAgainPage;
}());
exports.TryAgainPage = TryAgainPage;
//# sourceMappingURL=demo.component.js.map