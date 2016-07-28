"use strict";
/// <reference path="toast/toastdemo.component.ts" />
/// <reference path="styleconfig/style.component.ts" />
/// <reference path="modal/modal.component.ts" />
var router_1 = require('@angular/router');
var page_component_1 = require("./loadingindicator/page.component");
var demo_component_1 = require("./tryagain/demo.component");
var style_component_1 = require("./styleconfig/style.component");
var toastdemo_component_1 = require("./toast/toastdemo.component");
var modal_component_1 = require("./modal/modal.component");
exports.routes = [
    {
        path: '',
        redirectTo: '/loadingindicator',
        pathMatch: 'full'
    },
    {
        path: 'loadingindicator',
        component: page_component_1.StatsOverviewPage
    },
    {
        path: 'tryagain',
        component: demo_component_1.TryAgainPage
    },
    {
        path: 'style',
        component: style_component_1.StyleComponent
    },
    {
        path: 'toast',
        component: toastdemo_component_1.ToastComponent
    },
    {
        path: 'modal',
        component: modal_component_1.ModalComponent
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routes.js.map