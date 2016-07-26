"use strict";
/// <reference path="styleconfig/style.component.ts" />
var router_1 = require('@angular/router');
var page_component_1 = require("./loadingindicator/page.component");
var demo_component_1 = require("./tryagain/demo.component");
var style_component_1 = require("./styleconfig/style.component");
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