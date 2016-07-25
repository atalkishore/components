import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { TryagainService } from "./tryagain.service";
import { TryAgainPage} from "./demo.component";

@Component({
    selector: 'try-again',
    directives: [CORE_DIRECTIVES],
    template: `<div [style.visibility]="isLoading ? 'visible': 'hidden'" class="loading-indicator-container">
       <button class="btn btn-primary" (click)="TryAgain()" >Try again</button></div>
      `,
})
export class TryagainIndicator implements OnInit, OnDestroy {
    private isLoading = false;
    private subscription: any;

    //we probably want a reference to ElementRef here to do some DOM manipulations
    constructor(public el: ElementRef, public loadingService: TryagainService) { }

    showOrHideLoadingIndicator(loading) {
        this.isLoading = loading;
        if (this.isLoading) this.playLoadingAnimation();
        //else cancel the animation?
    }

    playLoadingAnimation() {
        //this will be your implementation to start the loading animation
    }

    ngOnInit() {
        this.subscription = this.loadingService.loading$.subscribe(loading => { this.showOrHideLoadingIndicator(loading) });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}