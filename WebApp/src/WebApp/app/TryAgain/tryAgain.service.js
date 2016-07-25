"use strict";
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/share');
/**
 * Singleton service, injected at app level
 */
var TryagainService = (function () {
    function TryagainService() {
        var _this = this;
        this.loading$ = new Observable_1.Observable(function (observer) { return _this._observer = observer; });
    }
    TryagainService.prototype.toggleLoadingIndicator = function (name) {
        if (this._observer) {
            this._observer.next(name);
        }
    };
    return TryagainService;
}());
exports.TryagainService = TryagainService;
//# sourceMappingURL=tryAgain.service.js.map