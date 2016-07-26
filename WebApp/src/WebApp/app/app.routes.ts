/// <reference path="styleconfig/style.component.ts" />
import { provideRouter, RouterConfig }  from '@angular/router';
import { StatsOverviewPage }  from "./loadingindicator/page.component";
import { TryAgainPage }  from "./tryagain/demo.component";
import { StyleComponent }  from "./styleconfig/style.component";

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/loadingindicator',
        pathMatch: 'full'
    },
    {
        path: 'loadingindicator',
        component: StatsOverviewPage
    },
    {
        path: 'tryagain',
        component: TryAgainPage
    },
    {
        path: 'style',
        component: StyleComponent
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/