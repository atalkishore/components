﻿import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';

/**
 * Singleton service, injected at app level
 */
export class LoadingService {
    loading$: Observable<String>;
    private _observer: Observer<String>;

    constructor() {
        this.loading$ = new Observable<String>(
            observer => this._observer = observer).share();
    }

    toggleLoadingIndicator(name) {
        if (this._observer) {
            this._observer.next(name);
        }
    }
}

@App({
    providers: [LoadingService],
    template: `
      <ion-nav #content [root]="rootPage"></ion-nav>
  `,
    config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
    prodMode: true
});