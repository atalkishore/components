/// <reference path="../typings/globals/es6-shim/index.d.ts" />
/// <reference path="../typings/index.d.ts" />
// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide } from '@angular/core';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {ToastOptions} from "ng2-toastr/ng2-toastr";
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
let options = {
    autoDismiss: false,
    positionClass: 'toast-bottom-right',
};
bootstrap(AppComponent, [
    ...MODAL_BROWSER_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    provide(ToastOptions, { useValue: new ToastOptions(options) }),
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
]);