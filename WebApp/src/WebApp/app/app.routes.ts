/// <reference path="toast/toastdemo.component.ts" />
/// <reference path="styleconfig/style.component.ts" />
/// <reference path="modal/modal.component.ts" />
import { provideRouter, RouterConfig }  from '@angular/router';
import { StatsOverviewPage }  from "./loadingindicator/page.component";
import { TryAgainPage }  from "./tryagain/demo.component";
import { StyleComponent }  from "./styleconfig/style.component";
import { ToastComponent }  from "./toast/toastdemo.component";
import { ModalComponent }  from "./modal/modal.component";

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
    {
        path: 'toast',
        component: ToastComponent
    },
    {
        path: 'modal',
        component: ModalComponent
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