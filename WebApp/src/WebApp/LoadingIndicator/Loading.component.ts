/// <reference path="loading.service.ts" />
import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {LoadingService} from "./loading.service";

@Component({
    selector: 'loading-indicator',
    directives: [CORE_DIRECTIVES],
    template: `
       <div [style.visibility]="isLoading ? 'visible': 'hidden'" class="loading-indicator-container">
           <div class="bullet-one"></div>
           <div class="bullet-two"></div>
           <div class="bullet-three"></div>
       </div>
      `,
})
export class LoadingIndicator implements OnInit, OnDestroy {
    private isLoading = false;
    private subscription: any;

    //we probably want a reference to ElementRef here to do some DOM manipulations
    constructor(public el: ElementRef, public loadingService: LoadingService) { }

    showOrHideLoadingIndicator(loading) {
        this.isLoading = loading;
        if (this.isLoading) this.playLoadingAnimation();
        //else cancel the animation?
    }

    playLoadingAnimation() {
        //this will be your implementation to start the loading animation
    }

    ngOnInit() {
        this.subscription = this.loadingService.loading$.subscribe(loading => this.showOrHideLoadingIndicator(loading));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }