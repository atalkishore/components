/// <reference path="tryagain/tryagain.service.ts" />
import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { LoadingService } from "./loadingindicator/loadindicator.service";

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [LoadingService]
})
export class AppComponent {
    constructor(public loadingService: LoadingService) { }

}