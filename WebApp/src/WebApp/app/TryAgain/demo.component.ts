import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core';
//import {StatsService} from "../../services/stats-service";
import { TryagainIndicator } from "./tryagain.component";
import { TryagainService } from "./tryagain.service";


@Component({
    template:`<div [style.visibility]="isShow ? 'visible': 'hidden'" class="loading-indicator-container">
       <button class="btn btn-primary" (click)="TryAgain()" >Try again</button></div>`,
})
export class TryAgainPage {
    isShow: boolean = true;
    private stats: Array<any> = [];

    constructor(private loadingService: TryagainService) { }

    onPageLoaded(): void {
        //this.isShow = !isShow
        this.isShow = false;


        //this.loadingService.toggleLoadingIndicator(this.isShow);
        //setTimeout(2000);
        this.getDataSlowly().then(response => {
            this.isShow = true;
        });

    }
    TryAgain() {
        this.onPageLoaded();
    }
    getDataSlowly() {

        return new Promise<boolean>(resolve => setTimeout(() => resolve(true), 3000));
        // 2 seconds
    }
}