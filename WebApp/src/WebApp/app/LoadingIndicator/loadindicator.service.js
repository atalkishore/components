"use strict";
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/share');
/**
 * Singleton service, injected at app level
 */
var LoadingService = (function () {
    function LoadingService() {
        var _this = this;
        this.loading$ = new Observable_1.Observable(function (observer) { return _this._observer = observer; });
    }
    LoadingService.prototype.toggleLoadingIndicator = function (name) {
        if (this._observer) {
            this._observer.next(name);
        }
    };
    return LoadingService;
}());
exports.LoadingService = LoadingService;
//# sourceMappingURL=loadindicator.service.js.map