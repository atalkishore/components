"use strict";
var router_1 = require('@angular/router');
var page_component_1 = require("./loadingindicator/page.component");
var demo_component_1 = require("./tryagain/demo.component");
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
        path: 'tryagain1',
        component: demo_component_1.TryAgainPage
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