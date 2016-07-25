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
var loadindicator_service_1 = require("./loadindicator.service");
var LoadingIndicator = (function () {
    //we probably want a reference to ElementRef here to do some DOM manipulations
    function LoadingIndicator(el, loadingService) {
        this.el = el;
        this.loadingService = loadingService;
        this.isLoading = false;
    }
    LoadingIndicator.prototype.showOrHideLoadingIndicator = function (loading) {
        this.isLoading = loading;
        if (this.isLoading)
            this.playLoadingAnimation();
        //else cancel the animation?
    };
    LoadingIndicator.prototype.playLoadingAnimation = function () {
        //this will be your implementation to start the loading animation
    };
    LoadingIndicator.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.subscription = this.loadingService.loading$.subscribe(function (loading) { debugger; _this.showOrHideLoadingIndicator(loading); });
    };
    LoadingIndicator.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoadingIndicator = __decorate([
        core_1.Component({
            selector: 'loading-indicator',
            directives: [common_1.CORE_DIRECTIVES],
            template: "\n       <div [style.visibility]=\"isLoading ? 'visible': 'hidden'\" class=\"loading-indicator-container\">           \n            <img src=\"/images/loading.gif\" />\n       </div>\n      ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, loadindicator_service_1.LoadingService])
    ], LoadingIndicator);
    return LoadingIndicator;
}());
exports.LoadingIndicator = LoadingIndicator;
//# sourceMappingURL=loading.component.js.map