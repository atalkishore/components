"use strict";
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var options = {
    autoDismiss: false,
    positionClass: 'toast-bottom-right',
};
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    core_1.provide(ng2_toastr_1.ToastOptions, { useValue: new ng2_toastr_1.ToastOptions(options) }),
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map