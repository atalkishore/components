"use strict";
/// <reference path="../typings/globals/es6-shim/index.d.ts" />
/// <reference path="../typings/index.d.ts" />
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var platform_browser_1 = require('angular2-modal/platform-browser');
var forms_1 = require('@angular/forms');
var options = {
    autoDismiss: false,
    positionClass: 'toast-bottom-right',
};
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, platform_browser_1.MODAL_BROWSER_PROVIDERS.concat([
    app_routes_1.APP_ROUTER_PROVIDERS,
    core_1.provide(ng2_toastr_1.ToastOptions, { useValue: new ng2_toastr_1.ToastOptions(options) }),
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]));
//# sourceMappingURL=main.js.map