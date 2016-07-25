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
var common_1 = require('@angular/common');
var tryagain_service_1 = require("./tryagain.service");
var TryagainIndicator = (function () {
    //we probably want a reference to ElementRef here to do some DOM manipulations
    function TryagainIndicator(el, loadingService) {
        this.el = el;
        this.loadingService = loadingService;
        this.isLoading = false;
    }
    TryagainIndicator.prototype.showOrHideLoadingIndicator = function (loading) {
        this.isLoading = loading;
        if (this.isLoading)
            this.playLoadingAnimation();
        //else cancel the animation?
    };
    TryagainIndicator.prototype.playLoadingAnimation = function () {
        //this will be your implementation to start the loading animation
    };
    TryagainIndicator.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loadingService.loading$.subscribe(function (loading) { _this.showOrHideLoadingIndicator(loading); });
    };
    TryagainIndicator.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TryagainIndicator = __decorate([
        core_1.Component({
            selector: 'try-again',
            directives: [common_1.CORE_DIRECTIVES],
            template: "<div [style.visibility]=\"isLoading ? 'visible': 'hidden'\" class=\"loading-indicator-container\">\n       <button class=\"btn btn-primary\" (click)=\"TryAgain()\" >Try again</button></div>\n      ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, tryagain_service_1.TryagainService])
    ], TryagainIndicator);
    return TryagainIndicator;
}());
exports.TryagainIndicator = TryagainIndicator;
//# sourceMappingURL=tryagain.component.js.map