import { Component, ViewContainerRef }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

import { LoadingService } from "./loadingindicator/loadindicator.service";

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  viewProviders: [...BS_MODAL_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  providers: [LoadingService]
})
export class AppComponent {
    constructor(public loadingService: LoadingService,public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }

}